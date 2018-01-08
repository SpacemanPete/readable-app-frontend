import React from 'react'
import ReactDOM from 'react-dom'
import './styles/normalize.css'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'



const store = configureStore()

console.log(store.getState())


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
