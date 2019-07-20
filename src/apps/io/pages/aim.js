import React, {createRef, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

import AIM from 'shared/ui/aim'
import data from 'shared/ui/aim/data'

const styles = makeStyles(() => ({
    '@global': {
        'html, body': {
            margin: 0,
            padding: 0
        },
        '.container': {
            margin: 40
        },
        '.container .demo': {
            marginBottom: 100
        },
        '.menu-container:before, .menu-container:after': {
            content: '""',
            display: 'block',
            height: 0,
            clear: 'both'
        },
        '.menu-container.below': {
            position: 'relative'
        },
        '.menu-container.below .menu': {
            width: '100%'
        },
        '.menu-container.below .menu .menu-item': {
            float: 'left',
            border: 'none'
        },
        '.menu-container.below .sub-menu': {
            position: 'absolute',
            top: 30,
            border: '1px #eee solid',
            borderTop: 'none'
        },
        '.menu, .sub-menu': {
            float: 'left',
            height: '100%',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: '1px #eee solid'
        },
        '.menu .menu-item, .sub-menu .sub-menu-item': {
            width: 200,
            padding: '0 20px',
            borderTop: '1px #eee solid',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontSize: 18,
            fontFamily: 'monospace'
        },
        '.menu .menu-item:first-child': {
            borderTop: 'none'
        },
        '.menu .menu-item.active': {
            color: '#f40',
            borderRight: '2px #27f solid',
            marginRight: -1
        },
        '.sub-menu': {
            borderLeft: 'none',
            minHeight: 278
        },
        '.sub-menu .sub-menu-item': {
            width: '100%',
            border: 'none',
            fontSize: 14
        },
        '.sub-menu .sub-menu-item:hover': {
            color: '#f40'
        }
    }
}))

export default () => {
    const classes = styles()
    const [ndx, setNdx] = useState(-1)
    const menuRef = createRef()

    const switchNdx = i => setNdx(i)

    const containerClassName = 'menu-container ' + 'left'

    const subMenuStyle = {}
    subMenuStyle.left = ndx * 140

    return <div className={classes.container}>
        <div className={containerClassName}>
            <ul ref={menuRef} className='menu' onMouseLeave={e => {AIM.handleMouseLeaveMenu(AIM, e)}}>
                {data && data.map((menu, index) => {
                    let className = 'menu-item'
                    if (index === ndx) className += ' active'

                    return <li className={className} key={index}
                               onMouseEnter={() => {AIM.handleMouseEnterRow.call(AIM, index, switchNdx)}}>
                        {menu.name}
                    </li>
                })}
            </ul>
            <ul className='sub-menu' style={subMenuStyle}>
                {data[ndx] && data[ndx].subMenu.map(((subMenu, index) => <li className='sub-menu-item' key={index}>{subMenu}</li>))}
            </ul>
        </div>
    </div>
}