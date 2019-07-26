import {PAGE} from 'shared/const/types'

export default (device, mobile, title) => dispatch =>
    dispatch({type: PAGE, payload: {device, mobile, title}})