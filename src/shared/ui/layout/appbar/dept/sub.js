import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import clsx from 'clsx'

const styles = makeStyles(theme => ({
    root: {
        width: 0,
        opacity: 0
    },
    expanded: {
        width: 525,
        opacity: 1,
        borderLeft: '1px solid #eee',
        padding: theme.spacing(1, 2),
        transition: 'width 0.2s ease-in-out',
    },
    title: {
        fontSize: 18,
        whiteSpace: 'nowrap',
        fontFamily: 'arial,sans-serif'
    }
}))

export default ({title, expanded}) => {
    const classes = styles()

    return <div className={clsx(classes.root, {[classes.expanded]: expanded})}>
        <div className={classes.title}>{title}</div>
    </div>
}