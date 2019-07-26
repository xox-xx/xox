const mobile = ua =>
    Boolean(ua.match(/Android|(i|web)OS|(i|Windows)?[ ]?(Phone|Pod|Pad)|(Opera|IE)?[ ]?(Mobile|Mini)|BlackBerry|J2ME|MIDP/i))

const device = ua =>
    ua.match(/Android/i) ? 'Android' :
        ua.match(/webOS/i) ? 'webOS' :
            ua.match(/iPhone|iPad|iPod/i) ? 'iOS' :
                ua.match(/Opera Mini|J2ME|MIDP/i) ? 'Mini' :
                    ua.match(/Windows|IEMobile/i) ? 'Windows' :
                        'other'

export default ua => ({
    device: device(ua),
    mobile: mobile(ua)
})