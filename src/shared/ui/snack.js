import clsx from 'clsx'
import React from 'react'
import {connect} from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SnackbarContent from '@material-ui/core/SnackbarContent/SnackbarContent'

import {setSnack} from 'shared/lib/redux/actions/snack'
import Icon from 'shared/ui/icons'
import {amber, green} from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(0, 2)
    },
    message: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            marginLeft: theme.spacing(1)
        }
    },
    icon: {

    }
}))

const fill = {
    info: '#FFF',
    error: '#d32f2f',
    warn: amber[700],
    success: green[600]
}

export default connect(state => state, {setSnack})(props => {
    const {snack: {open, message, variant}, setSnack, ...other} = props
    const classes = useStyles()

    const onClose = (e, reason) => {
        if (reason === 'clickaway') return
        setSnack()
    }

    return <Snackbar
        open={open}
        onClose={onClose}
        autoHideDuration={4000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
    >
        <SnackbarContent
            aria-describedby='snack'
            className={classes.content}
            message={
                <span className={classes.message}>
                    <Icon name={variant} fill={fill[variant]} className={clsx(classes.icon, classes[variant])}/>
                    <span>{message}</span>
                </span>
            }
            action={[
                <IconButton key='close' aria-label='Close' color='inherit' onClick={onClose}>
                    <Icon name='close' className={classes.icon}/>
                </IconButton>
            ]}
            {...other}
        />
    </Snackbar>
})
