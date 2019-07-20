import clsx from 'clsx'
import React, {createRef, useState} from 'react'
import Slide from '@material-ui/core/Slide/Slide'
import Snackbar from '@material-ui/core/Snackbar/Snackbar'
import makeStyles from '@material-ui/styles/makeStyles/makeStyles'

import {err} from 'shared/utils'
import Icon from 'shared/ui/icons'
import Logo from 'shared/ui/icons/logo'
import * as Valid from 'shared/utils/validate'
import {firestore} from 'shared/lib/firebase'

const styles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        '& i': {
            color: theme.palette.common.white,
            marginBottom: theme.spacing(5),
            fontSize: theme.spacing(2) - 2
        }
    },
    field: {
        position: 'relative'
    },
    input: {
        color: '#FFF',
        background: 'none',
        border: '2px solid #FFF',
        outline: 'none',
        padding: theme.spacing(1, 2),
        borderRadius: 25,
        fontSize: 14,
        transition: '0.4s all',
        width: 250,
        paddingRight: theme.spacing(6),
        '&::placeholder': {
            color: '#FFF',
        }
    },
    error: {
        '& div': {
            color: '#862000',
            fontWeight: 500
        }
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        right: 13,
        top: '25%',
        transform: 'translateY(-2px)',
        '& svg': {
            fill: theme.palette.primary.main
        }
    },
    snack: {
        '& div': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            flexDirection: 'column'
        }
    },
    italic: {
        marginTop: theme.spacing(1)
    }
}))

const trx = props => <Slide {...props} direction='up' />

export default () => {
    const input = createRef()
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const classes = styles()

    const onChange = ({target: {value}}) => setEmail(value.toLowerCase())

    const setSnack = m => {
        setOpen(true)
        setMessage(m)
    }

    const errSnack = e => {
        setError(true)
        setOpen(true)
        setMessage(e)
    }

    const submit = async () => {
        if (email !== '') {
            if (Valid.email(email)) {
                setSnack('Processing...')
                setEmail('')
                try {
                    await firestore.collection('emails').doc(email).set({email})
                    setSnack('Thank you for your feedback')
                } catch (error) {
                    setSnack(err(error))
                }
            } else errSnack('Invalid Email')
        } else errSnack("Email can't be blank")
    }

    const onClose = () => {
        setOpen(false)
        setTimeout(() => {setError(false)}, 1000)
    }

    return <div className={classes.root}>
        <Logo />
        <i>Coming Soon</i>
        <div className={classes.field}>
            <input
                ref={input}
                type='text'
                value={email}
                onChange={onChange}
                placeholder='Your email'
                className={classes.input}/>
            <div
                onClick={submit}
                className={classes.icon}>
                <Icon name='send' fill='#fff'/>
            </div>
        </div>
        <i className={classes.italic}>We promise not to spam</i>
        <Snackbar
            open={open}
            onClose={onClose}
            message={message}
            autoHideDuration={4000}
            TransitionComponent={trx}
            ContentProps={{'aria-describedby': 'message'}}
            className={clsx(classes.snack, {[classes.error]: error})}
        />
    </div>
}