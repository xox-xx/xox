import {ERROR, LOADING, PAGE} from 'shared/const/types'

const INITIAL_STATE = {
    title: 'pezashop',
    loading: false,
    error: null,
    mobile: false,
    device: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PAGE:
            const {device, mobile} = action.payload
            const title = action.payload.title || state.title
            return {...state, ...{device, mobile, title}}
        case LOADING:
            return {...state, ...{loading: action.payload.loading}}
        case ERROR:
            return {...state, ...{error: action.payload.error}}
        default:
            return state
    }
}