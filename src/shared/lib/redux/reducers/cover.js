import {COVER} from 'shared/const/types'

export default (state = {open: false}, action) =>
    action.type === COVER ? {...state, ...{open: action.payload.open}} : state