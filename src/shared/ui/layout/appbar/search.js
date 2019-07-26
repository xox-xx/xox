import clsx from 'clsx'
import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Icon from 'shared/ui/icons'

const styles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center'
    },
    fieldset: {
        display: 'flex',
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        boxShadow: '0 1px 3px rgba(0,0,0,.2)'
    },
    input: {
        border: 'none',
        height: theme.spacing(4.25)
    },
    search: {
        borderRadius: '5px 0 0 5px',
        padding: theme.spacing(0, 2),
        width: theme.spacing(60.625)
    },
    button: {
        display: 'flex',
        borderRadius: '0 5px 5px 0',
        padding: theme.spacing(0, 3),
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.main
    },
    icon: {}
}))

export default () => {
    const classes = styles()
    const [input, setInput] = useState('')

    const onSubmit = e => {
        e.preventDefault()
    }

    return <form onSubmit={onSubmit} className={classes.form}>
        <div className={classes.fieldset}>
            <input value={input} autoComplete='off' placeholder='Find products, shops and more' onChange={e => {setInput(e.target.value)}} className={clsx(classes.input, classes.search)}/>
            <button type='submit' className={clsx(classes.input, classes.button)}>
                <Icon name='search' className={classes.icon}/>
            </button>
        </div>
    </form>
}