import clsx from 'clsx'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {connect} from 'react-redux'

const styles = makeStyles(theme => ({
    cover: {
        position: 'absolute',
        top: 100,
        left: 0,
        width: '100%',
        height: 'calc(100% - 100px)',
        display: 'none',
        backgroundColor: theme.palette.common.black,
        msFilter: 'opacity(.6)',
        filter: 'alpha(opacity=60)',
        opacity: 0.6,
        transform: 'translate3d(0,0,0)',
        zIndex: 4
    },
    active: {
        display: 'block'
    }
}))

export default connect(state => state)(({cover: {open}}) => {
    const classes = styles()
    return <div className={clsx(classes.cover, {[classes.active]: open})}/>
})