import {combineReducers} from 'redux'

import app from './app'
import tabs from './tabs'

import {snack} from 'shared/lib/redux/reducers'

export default combineReducers({
    app,
    tabs,
    snack
})