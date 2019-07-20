import React from 'react'
import Head from 'next/head'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from 'shared/theme'

export default class extends App {
    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
    }

    render() {
        const {Component, pageProps, store} = this.props
        const {app} = store.getState()

        return (
            <Container>
                <Head>
                    <title>{app.label}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
                </ThemeProvider>
            </Container>
        )
    }
}