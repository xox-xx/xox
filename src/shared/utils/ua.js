const mobile = ua =>
    Boolean(ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i))

const device = ua =>
    ua.match(/Android/i) ? 'Android' :
        ua.match(/webOS/i) ? 'webOS' :
            ua.match(/iPhone/i) ? 'iPhone' :
                ua.match(/iPad/i) ? 'iPad' :
                    ua.match(/iPod/i) ? 'iPod' :
                        ua.match(/BlackBerry/i) ? 'BlackBerry' :
                            ua.match(/IEMobile/i) ? 'IEMobile' :
                                ua.match(/Opera Mini/i) ? 'Opera Mini' :
                                    ua.match(/Windows Phone/i) ? 'Windows Phone' :
                                        'other'

export default ua => ({
    device: device(ua),
    mobile: mobile(ua)
})