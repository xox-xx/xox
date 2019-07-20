import {TABS} from 'shared/const/types'

export const setTab = (e, value) => dispatch =>
    dispatch({type: TABS, payload: {value}})