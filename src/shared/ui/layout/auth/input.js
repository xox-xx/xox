import React from 'react'
import TextField from '@material-ui/core/TextField/TextField'

export default ({label, ...rest}) =>
    <TextField
        label={label}
        margin='dense'
        variant='filled'
        fullWidth
        {...rest}/>