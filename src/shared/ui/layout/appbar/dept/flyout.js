import React, {createRef, useEffect, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import AIM from 'shared/lib/aim'
import Link from 'shared/ui/link'

import Sub from './sub'

const styles = makeStyles(theme => ({
    root: {
        top: 0,
        left: 0,
        zIndex: 99,
        fontSize: 13,
        borderRadius: 2,
        display: 'flex',
        background: '#fff',
        overflow: 'visible',
        position: 'absolute',
        paddingTop: theme.spacing(1.6),
        paddingBottom: theme.spacing(1),
        transform: 'translate3d(0,0,0)',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.13)'
    },
    items: {
        width: 238,
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        fontSize: 13,
        color: '#444',
        fontWeight: 400,
        cursor: 'pointer',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        padding: theme.spacing(0.6, 2),
        fontFamily: 'arial,sans-serif',
        borderLeft: '5px solid transparent',
        '&:hover': {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
        }
    }
}))

const items = ['Music & CDs', 'Electronics', 'Computers', 'Baby', 'Beauty & Personal Care', 'Men\'s Fashion', 'Women\'s Fashion', 'Toys & Games', 'Books', 'Pet Supplies']

export default () => {
    const classes = styles()
    const menu = createRef()
    const [index, setIndex] = useState(-1)

    const onMouseLeave = e => {
        AIM.onMouseLeaveMenu(() => setIndex(-1), e)
    }

    const onMouseEnter = i => () => {
        AIM.onMouseEnterRow.call(AIM, i, () => setIndex(i))
    }


    useEffect(() => {
        AIM.init({menuSelector: menu.current})
    })

    return <div ref={menu} onMouseLeave={onMouseLeave} className={classes.root}>
        <div className={classes.items}>
            {items.map(((n, i) => <Link key={i} name={n} onMouseEnter={onMouseEnter(i)} className={classes.link}/>))}
        </div>
        <Sub title={items[index]} expanded={index >= 0}/>
    </div>
}