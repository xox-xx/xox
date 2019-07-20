import clsx from 'clsx'
import React from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography/Typography'

import Tabs from '../../ui/tabs'
import About from '../../ui/tabs/about'
import Contact from '../../ui/tabs/contact'
import Features from '../../ui/tabs/features'
import Progress from '../../ui/tabs/progress'

import Snack from 'shared/ui/snack'
import Logo from 'shared/ui/icons/logo'

const styles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.primary.main
    },
    col: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    paper: {
        minHeight: 400,
        maxWidth: 656,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    h2: {
        textTransform: 'uppercase',
        fontWeight: 400,
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 75%, ${theme.palette.secondary.main}50 75%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    h4: {
        marginTop: theme.spacing(3),
        textAlign: 'center'
    },
    content: {
        height: 'calc(100% - 120px)'
    },
    overline: {
        fontSize: '1.5rem',
        fontWeight: 100,
        color: '#AAA'
    }
}))

const title = {
    0: null,
    1: 'About us',
    2: 'Features',
    3: 'Contact us'
}

const content = {
    0: <Progress/>,
    1: <About/>,
    2: <Features/>,
    3: <Contact/>
}

export default connect(state => state)(({tabs: {value}}) => {
    const classes = styles()
    return <div className={clsx(classes.root, classes.col)}>
        <Paper className={classes.paper}>
            <Tabs/>
            {title[value] && <Typography variant='h4' classes={{h4: classes.h4}}>{title[value]}</Typography>}
            <div className={clsx(classes.content, classes.col)}>
                {content[value]}
            </div>
        </Paper>
        <Logo />
        <Snack/>
    </div>
})