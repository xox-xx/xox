import withRedux from 'next-redux-wrapper'

import App from 'shared/ui/base/app'
import initStore from 'shared/lib/redux'

import reducers from '../reducers'

export default withRedux(initStore(reducers))(class extends App {})