const activate = (rowIdentifier, handler) => handler.call(this, rowIdentifier)

function possiblyActivate(rowIdentifier, handler) {
    activate.call(this, rowIdentifier, handler)
}

export default {
    handleMouseLeaveMenu: function(handler, e) {
        if (typeof handler === 'function') handler.call(this, e)
    },

    handleMouseEnterRow: function(rowIdentifier, handler) {
        possiblyActivate.call(this, rowIdentifier, handler)
    }
}