import React from 'react'
import flush from 'styled-jsx/server'
import {ServerStyleSheets} from '@material-ui/styles'
import Document, {Head, Main, NextScript} from 'next/document'

import theme from 'shared/theme'

export default class extends Document {
    static getInitialProps = async ctx => {
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => sheets.collect(<App {...props} />)
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: (
                <React.Fragment>
                    {sheets.getStyleElement()}
                    {flush() || null}
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <html lang='en' dir='ltr'>
            <Head>
                <meta charSet='utf-8'/>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'/>
                <meta name='theme-color' content={theme.palette.primary.main}/>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap'/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}