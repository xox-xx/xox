const DELAY = 300
const TOLERANCE = 75
const MOUSE_LOCS_TRACKED = 3

const on = (el, eventName, callback) => {
    if (el.addEventListener) el.addEventListener(eventName, callback, false)
    else if (el.attachEvent) el.attachEvent('on' + eventName, e => callback.call(el, e || window.event))
}

const off = (el, eventName, callback) => {
    if (el.removeEventListener) el.removeEventListener(eventName, callback)
    else if (el.detachEvent) el.detachEvent('on' + eventName, callback)
}

const offset = el => {
    if (!el) return {
        left: 0,
        top: 0
    }

    const rect = el.getBoundingClientRect()
    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
    }
}

const outerWidth = el => {
    let _width = el.offsetWidth
    const style = el.currentStyle || getComputedStyle(el)

    _width += (parseInt(style.marginLeft, 10) || 0)
    return _width
}

const outerHeight = el => {
    let _height = el.offsetHeight
    const style = el.currentStyle || getComputedStyle(el)

    _height += (parseInt(style.marginLeft, 10) || 0)
    return _height
}

let mouseMoveListener = 0
let mouseLocs = []

const handleMouseMoveDocument = e => {
    mouseLocs.push({
        x: e.pageX,
        y: e.pageY
    })

    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift()
}

function getActivateDelay(config) {
    config = config || {}

    const menu = config.menuSelector
    const menuOffset = offset(menu)

    const upperLeft = {
        x: menuOffset.left,
        y: menuOffset.top - (config.tolerance || TOLERANCE)
    }
    const upperRight = {
        x: menuOffset.left + outerWidth(menu),
        y: upperLeft.y
    }
    const lowerLeft = {
        x: menuOffset.left,
        y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE)
    }
    const lowerRight = {
        x: menuOffset.left + outerWidth(menu),
        y: lowerLeft.y
    }

    const loc = mouseLocs[mouseLocs.length - 1]
    let prevLoc = mouseLocs[0]

    if (!loc) return 0

    if (!prevLoc) prevLoc = loc

    if (prevLoc.x < menuOffset.left || prevLoc.x > lowerRight.x ||
        prevLoc.y < menuOffset.top || prevLoc.y > lowerRight.y
    ) return 0

    if (this._lastDelayDoc &&
        loc.x === this._lastDelayDoc.x && loc.y === this._lastDelayDoc.y) return 0

    const slope = (a, b) => (b.y - a.y) / (b.x - a.x)

    let decreasingCorner = upperRight
    let increasingCorner = lowerRight

    if (config.submenuDirection === 'left') {
        decreasingCorner = lowerLeft
        increasingCorner = upperLeft
    }
    else if (config.submenuDirection === 'below') {
        decreasingCorner = lowerRight
        increasingCorner = lowerLeft
    }
    else if (config.submenuDirection === 'above') {
        decreasingCorner = upperLeft
    }

    const decreasingSlope = slope(loc, decreasingCorner)
    const increasingSlope = slope(loc, increasingCorner)
    const prevDecreasingSlope = slope(prevLoc, decreasingCorner)
    const prevIncreasingSlope = slope(prevLoc, increasingCorner)

    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
        this._lastDelayLoc = loc
        return config.delay || DELAY
    }

    this._lastDelayLoc = null
    return 0
}

function activate(rowIdentifier, handler) {
    handler.call(this, rowIdentifier)
}


function possiblyActivate(rowIdentifier, handler, config) {
    const delay = getActivateDelay.call(this, config)

    if (delay) {
        this.__menuTimer = setTimeout(() => {
            possiblyActivate.call(this, rowIdentifier, handler, config)
        }, delay)
    }
    else activate.call(this, rowIdentifier, handler)
}

export default {
    init: function(options) {
        const defaultOptions = {delay:400, tolerance: 75, submenuDirection: 'below'}
        this.__menuConfig = {...defaultOptions, ...options}
    },

    __getMouseMoveDocumentHandler: function() {
        if (!this.__mouseMoveDocumentHandler) {
            this.__mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this)
        }

        return this.__mouseMoveDocumentHandler
    },

    componentDidMount: function() {
        if (mouseMoveListener === 0) {
            on(document, 'mousemove', this.__getMouseMoveDocumentHandler())
        }

        mouseMoveListener += 1
    },

    componentWillUnmount: function() {
        mouseMoveListener -= 1

        if (mouseMoveListener === 0) {
            off(document, 'mousemove', this.__getMouseMoveDocumentHandler())
            mouseLocs = []
        }

        clearTimeout(this.__menuTimer)
        this.__menuTimer = null
        this.__mouseMoveDocumentHandler = null
    },

    onMouseLeaveMenu: function(handler, e) {
        if (this.__menuTimer) clearTimeout(this.__menuTimer)

        if (typeof handler === 'function') handler.call(this, e)
    },

    onMouseEnterRow: function(rowIdentifier, handler) {
        if (this.__menuTimer) clearTimeout(this.__menuTimer)

        possiblyActivate.call(this, rowIdentifier, handler, this.__menuConfig)
    }
}