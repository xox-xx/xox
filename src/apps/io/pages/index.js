import React from 'react'

import withUA from 'shared/hoc/ua'
import Home from '../ui/home'
import Mobile from '../ui/home/mobile'

export default withUA(({ua: {mobile}}) =>
    mobile ? <Mobile/> : <Home/>)