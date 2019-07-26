import clsx from 'clsx'
import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Input from './input'

const styles = makeStyles(theme => ({
    root: {
        height: '100%'
    },
    container: {
        minWidth: 384
    },
    flex: {
        display: 'flex',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        flexDirection: 'column',
    },
    h3: {
        fontSize: 20,
        fontWeight: 400,
        marginTop: 0,
        textAlign: 'center'
    },
    icon: {
        marginBottom: -22,
        visibility: 'visible',
        fontSize: theme.spacing(2),
        fill: theme.palette.primary.main
    },
    hide: {
        visibility: 'hidden'
    },
    button: {
        fontSize: 17,
        width: '100%',
        borderRadius: 5,
        cursor: 'pointer',
        padding: '10px 13px',
        pointerEvents: 'all',
        outline: 'none !important',
        color: theme.palette.common.white,
        fontFamily: '"Titillium Web", sans-serif',
        backgroundColor: theme.palette.primary.main,
        border: `1px solid  ${theme.palette.primary.main}`
    }
}))

export default () => {
    const classes = styles()
    const [slide, setSlide] = useState(0)

    const onSubmit = e => {
        e.preventDefault()

        return slide < 1 && setSlide(slide + 1)
    }

    return <div className={clsx(classes.root, classes.flex, classes.center)}>
        <form onSubmit={onSubmit} className={clsx(classes.flex, classes.column)}>
            <h2 className={classes.h3}>Welcome! Please sign in</h2>
            <div className={clsx(classes.container, classes.flex, classes.column)}>
                <Input
                    label='Email or phone'/>
                <Input
                    type='password'
                    label='Password'/>
            </div>
            <button className={classes.button}>Sign in</button>
        </form>
    </div>
}

