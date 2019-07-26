import clsx from 'clsx'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container/Container'

import Link from 'shared/ui/link'

const styles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        width: '100%'
    },
    toolbar: {
        height: theme.spacing(6)
    },
    row: {
        display: 'flex',
        alignItems: 'center'
    },
    item: {
        fontSize: 13,
        flexGrow: 1,
        color: theme.palette.common.white
    },
    link: {
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    }
}))

export default () => {
    const classes = styles()
    return <div className={classes.root}>
        <Container maxWidth='md' className={clsx(classes.toolbar, classes.row)}>
            <span className={classes.item}>{`© ${new Date().getFullYear()} Pezashop.com`}</span>
            {['Site Map','Privacy Policy,policies/privacy', 'Web Use Policy,policies/web-use', 'Cookie Policy,policies/cookie'].map((n, i) =>
                <Link key={i} name={n} className={classes.link} />
            )}
        </Container>
    </div>
}