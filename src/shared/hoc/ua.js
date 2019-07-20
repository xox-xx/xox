import React from 'react'
import ua from 'shared/utils/ua'

export default Page => {
    const withMobile = props => <Page {...props} />

    withMobile.getInitialProps = async ctx => {
        const {req} = ctx

        return {
            ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : {}),
            ua: ua(req ? req.headers['user-agent'] : navigator.userAgent)
        }
    }

    return withMobile
}