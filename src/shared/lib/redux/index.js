import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import {dev} from 'shared/utils'

export default reducers => (initialState = {}) =>
    createStore(
        reducers,
        initialState,
        dev ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk))