import React from 'react'
import ua from 'shared/utils/ua'

import page from 'shared/lib/redux/actions/page'

export default Page => {
    const wrapper = props => <Page {...props} />

    wrapper.getInitialProps = async ctx => {
        const {store: {dispatch}, req} = ctx
        const {device, mobile} = ua(req ? req.headers['user-agent'] : navigator.userAgent)
        const title = req ? req.url.split('/').slice(-1)[0] : null

        dispatch(page(device, mobile, title))

        return {...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {})}
    }

    return wrapper
}