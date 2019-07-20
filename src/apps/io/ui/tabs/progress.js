import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Form from '../form'

const styles = makeStyles(theme => ({
    h2: {
        textTransform: 'uppercase',
        fontWeight: 400,
        background: `linear-gradient(90deg, ${theme.palette.primary.main} 75%, #46A88675 75%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    },
    overline: {
        fontSize: '1.5rem',
        fontWeight: 100,
        color: '#AAA'
    }
}))

export default () => {
    const classes = styles()
    return <>
        <Typography classes={{h2: classes.h2}} variant='h2'>Coming Soon</Typography>
        <Typography classes={{overline: classes.overline}} variant='overline'>75%</Typography>
        <Form/>
    </>
}