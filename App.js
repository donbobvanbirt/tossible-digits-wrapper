import React from 'react'
import { Provider } from 'react-redux'

import store from './src/redux/store'
import Layout from './src'

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

export default App
