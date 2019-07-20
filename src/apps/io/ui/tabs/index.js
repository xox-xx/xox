import clsx from 'clsx'
import React from 'react'
import {connect} from 'react-redux'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import makeStyles from '@material-ui/core/styles/makeStyles'

import {setTab} from 'shared/lib/redux/actions'

const styles = makeStyles(theme => ({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: theme.palette.primary.main
        }
    },
    tab: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(0.5)
    },
    active: {
        color: theme.palette.primary.main
    }
}))

export default connect(state => state, {setTab})(({tabs: {value}, setTab}) => {
    const classes = styles()
    return <Tabs value={value} onChange={setTab} classes={{indicator: classes.indicator}} TabIndicatorProps={{children: <div/>}}>
        {['How soon', 'About', 'Features', 'Contact'].map((n, i) =>
            <Tab key={i} label={n} disableRipple classes={{root: classes.tab}} className={clsx({[classes.active]: i === value})}/>
        )}
    </Tabs>})