import clsx from 'clsx'
import {connect} from 'react-redux'
import React, {createRef, useEffect, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import AIM from 'shared/lib/aim'
import Link from 'shared/ui/link'
import Icon from 'shared/ui/icons'
import setCover from 'shared/lib/redux/actions/cover'

import Menu from './menu'

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    menu: {
        position: 'relative',
        marginRight: theme.spacing(1)
    },
    link: {
        fontWeight: 500,
        padding: theme.spacing(0, 1),
        color: theme.palette.common.white
    },
    icon: {
        fill: theme.palette.common.white,
        width: 14,
        height: 14,
        marginBottom: -2,
        marginLeft: -5
    },
    a: {
        padding: theme.spacing(1),
        '&:hover': {
            textDecoration: 'none'
        }
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
            <Link name='Account,-1' className={clsx(classes.link, classes.a)}/>
            <Icon name='down' className={classes.icon}/>
            <Menu active={active}/>
        </div>
        <Link name='Help' className={classes.link}/>
    </div>
})