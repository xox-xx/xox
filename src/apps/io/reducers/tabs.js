import {TABS} from 'shared/const/types'

export default (state = { value: 0 }, action) =>
    action.type === TABS ? Object.assign({}, state, {value: action.payload.value}) : state