import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = makeStyles(theme => ({
    body: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: theme.spacing(-4)
    }
}))

export default () =>
    <div className={styles().body}>
        {['Online Shopping', 'Job Listing', 'Classified', '...'].map((n, i) =>
            <Typography key={i}>{n}</Typography>
        )}
    </div>