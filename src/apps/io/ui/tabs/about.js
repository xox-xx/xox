import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    h4: { marginBottom: theme.spacing(5) },
    body1: {
        margin: theme.spacing(-8, 5, 0)
    },
    button: {
        marginTop: theme.spacing(2)
    }
}))

export default () => {
    const classes = styles()
    return <>
        <Typography variant='body1' classes={{body1: classes.body1}}><b>Pezashop Pvt Ltd</b> is an upcoming e-commerce company based in Lusaka, Zambia.</Typography>
    </>
}