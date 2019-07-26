import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Cover from 'shared/ui/cover'

import Appbar from './appbar'
import Footer from './footer'

const styles = makeStyles(theme => ({
    main: {
        flexGrow: 1
    }
}))

export default ({children}) => {
    const classes = styles()
    return <>
        <Appbar/>
        <div className={classes.main}>
            {children}
        </div>
        <Cover/>
        <Footer/>
    </>
}
