import {connect} from 'react-redux'
import React, {createRef, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import {err} from 'shared/utils'
import Icon from 'shared/ui/icons'
import {firestore} from 'shared/lib/firebase'
import * as Valid from 'shared/utils/validate'
import {msgSnack} from 'shared/lib/redux/actions/snack'

const styles = makeStyles(theme => ({
    field: {
        position: 'relative'
    },
    input: {
        color: theme.palette.primary.main,
        background: 'none',
        border: '2px solid #FFF',
        outline: 'none',
        padding: theme.spacing(1, 2),
        borderRadius: 25,
        fontSize: 14,
        transition: '0.4s all',
        width: 0
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
    expanded: {
        width: 250,
        paddingRight: theme.spacing(6),
        borderColor: theme.palette.primary.main
    },
    italic: {
        marginTop: theme.spacing(1),
        marginLeft: -theme.spacing(1.5)
    }
}))

export default connect(state => state, {msgSnack})(props => {
    const classes = styles()
    const input = createRef()
    const {msgSnack} = props
    const [email, setEmail] = useState('')
    const [icon, setIcon] = useState('notify')

    const collapse = () => {
        input.current.classList.remove(classes.expanded)
        input.current.addEventListener('transitionstart', () => {
            setIcon('notify')
        })
    }

    const expand = () => {
        input.current.focus()
        input.current.classList.add(classes.expanded)
        input.current.addEventListener('transitionstart', () => {
            setIcon('send')
        })
    }

    const expanded = () => icon === 'notify'

    const submit = async () => {
        if (email !== '') {
            if (Valid.email(email)) {
                collapse()
                setEmail('')
                msgSnack('Processing...')
                try {
                    await firestore.collection('emails').doc(email).set({email})
                    msgSnack('Thank you for your feedback', 'success')
                } catch (error) {
                    msgSnack(err(error))
                }
            } else msgSnack('Invalid Email', 'error')
        } else msgSnack("Email can't be blank", 'error')
    }

    const onClick = () =>
        expanded() ? expand() : submit()

    const onChange = ({target: {value}}) => setEmail(value.toLowerCase())

    return <>
        <ClickAwayListener onClickAway={collapse}>
            <div className={classes.field}>
                <input
                    ref={input}
                    type='text'
                    value={email}
                    onChange={onChange}
                    placeholder='Your email'
                    className={classes.input}/>
                <div
                    onClick={onClick}
                    className={classes.icon}>
                    <Icon name={icon}/>
                </div>
            </div>
        </ClickAwayListener>
        <i className={classes.italic}>{expanded() ? 'Notify Me' : 'We promise not to spam'}</i>
    </>
})