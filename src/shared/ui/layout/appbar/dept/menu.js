import clsx from 'clsx'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    root: {
        top: 40,
        left: 1,
        width: 240,
        zIndex: 99,
        fontSize: 13,
        display: 'none',
        borderRadius: 2,
        background: '#fff',
        overflow: 'visible',
        position: 'absolute',
        margin: '-3px 0 0 -2px',
        transform: 'translate3d(0,0,0)',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.13)'
    },
    arrow: {
        top: -10,
        left: 110,
        borderWidth: 9,
        marginLeft: -1,
        borderTopWidth: 0,
        position: 'absolute',
        borderStyle: 'dashed',
        borderColor: 'transparent',
        '& div': {
            top: 1,
            left: -9,
            borderWidth: 9,
            borderTopWidth: 0,
            position: 'absolute',
            borderStyle: 'dashed',
            borderColor: 'transparent',
            borderBottom: '9px solid #fff'
        }
    },
    active: {
        display: 'block'
    }
}))

export default ({active, children}) => {
    const classes = styles()
    return <div className={clsx(classes.root, {[classes.active]: active})}>
        <div className={classes.arrow}>
            <div/>
        </div>
        {children}
    </div>
}