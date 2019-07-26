import clsx from 'clsx'
import React from 'react'
import {withRouter} from 'next/router'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container/Container'

import Dept from './dept'
import Action from './action'
import Search from './search'
import Logo from 'shared/ui/icons/logo'
import Link from 'next/dist/client/link'


const styles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        width: '100%'
    },
    fixed: {
        position: 'fixed',
        top: 0,
        left: 0
    },
    toolbar: {
        height: theme.spacing(6)
    },
    navbar: {
        height: theme.spacing(6.5)
    },
    logo: {
        width: 137,
        height: 29
    },
    row: {
        display: 'flex',
        alignItems: 'center'
    }
}))

export default withRouter(({router: {route}}) => {
    const classes = styles()
    const fixed = ['login'].includes(route.slice(1))

    return <div className={clsx(classes.root, {[classes.fixed]: fixed})}>
        <Container maxWidth='md' className={clsx(classes.toolbar, classes.row)}>
            <Link href='/'>
                <a href='/' className={classes.logo}>
                    <Logo/>
                </a>
            </Link>
            {!fixed && <>
                <Search/>
                <Action/>
            </>}
        </Container>
        {!fixed && <Container maxWidth='md' className={clsx(classes.navbar, classes.row)}>
            <Dept/>
        </Container>}
    </div>
})