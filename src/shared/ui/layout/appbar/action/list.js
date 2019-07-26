import React from 'react'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'

import Icon from 'shared/ui/icons'

const names = ['Account', 'Shops', 'Favorites', 'notifications', 'Logout']
export default () =>
    <List component='nav' aria-label='menu'>
        {names.map((n, i) =>
            <ListItem key={i} button disableRipple divider={i+1 !== names.length}>
                <ListItemIcon>
                    <Icon name={n.toLowerCase()}/>
                </ListItemIcon>
                <ListItemText primary={n}/>
            </ListItem>)}
    </List>