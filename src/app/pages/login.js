import React from 'react'

import withHoc from 'ui/hoc'
import Layout from 'ui/layout'
import Auth from 'ui/layout/auth'

export default withHoc(() =>
    <Layout>
        <Auth/>
    </Layout>)