import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import ProductScreen from './screens/productScreen'
import CartScreen from './screens/CartScreen'
import ShippingScreen from './screens/shippingScreen'
import reportWebVitals from './reportWebVitals'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
<<<<<<< HEAD
import RegisterScreen from './screens/RegisterScreen'
=======
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
<<<<<<< HEAD
          <Route path='/register' element={<RegisterScreen />} />
=======
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
          <Route path='product/:id' element={<ProductScreen />} />
          <Route path='cart/:id' element={<CartScreen />} />
          <Route path='shipping' element={<ShippingScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
