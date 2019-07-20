import {SNACK} from 'shared/const/types'

export default (state = {open: false, message: '', variant: ''}, action) => {
    if (action.type === SNACK) {
        const {variant = 'info', message, open = !state.open} = action.payload
        return Object.assign({}, state, { variant, message, open })
    }
    return state
}