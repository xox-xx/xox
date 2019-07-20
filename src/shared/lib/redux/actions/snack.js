import {SNACK} from 'shared/const/types'

export const setSnack = () => dispatch =>
    dispatch({type: SNACK, payload: {}})

export const msgSnack = (message, variant) => dispatch =>
    dispatch({type: SNACK, payload: {open: true, message, variant}})