import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem('cart', JSON.stringify({ items: state.cart.items }))
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
