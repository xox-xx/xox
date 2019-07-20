import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    body: {
        marginTop: theme.spacing(-8)
    }
}))

export default () =>
    <div className={styles().body}>
        <Typography><a href='mailto:bursaries@walanda.org' target='_blank'>info@pezashop.com</a></Typography>
        <Typography>(+260) 955-545-499</Typography>
    </div>