import {connect} from 'react-redux'
import React, {createRef, useEffect, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Button from '@material-ui/core/Button/Button'

import AIM from 'shared/lib/aim'
import Icon from 'shared/ui/icons'
import setCover from 'shared/lib/redux/actions/cover'

import Menu from './menu'
import Flyout from './flyout'

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    menu: {
        position: 'relative',
        marginRight: theme.spacing(1)
    },
    button: {
        padding: theme.spacing(1),
        fontSize: theme.spacing(2),
        textTransform: 'capitalize',
        fontWeight: 500,
        color: theme.palette.common.white,
        border: '1px solid rgba(255, 255, 255, 0.09)',
        fontFamily: 'proxima-nova,Helvetica,sans-serif'
    }
}))

export default connect(null, {setCover})(({setCover}) => {
    const classes = styles()
    const [active, setActive] = useState(false)
    const menu = createRef()

    const onMouseLeave = e => {
        setCover(false)
        AIM.onMouseLeaveMenu(() => setActive(false), e)
    }

    const onMouseEnter = () => {
        setCover(true)
        AIM.onMouseEnterRow.call(AIM, active, () => setActive(true))
    }

    useEffect(() => {
        AIM.init({menuSelector: menu.current})
    })

    return <div ref={menu} className={classes.root}>
        <div className={classes.menu} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Button disableRipple className={classes.button}>
                Departments
                <Icon name='down'/>
            </Button>
            <Menu active={active}>
                <Flyout/>
            </Menu>
        </div>
    </div>
})