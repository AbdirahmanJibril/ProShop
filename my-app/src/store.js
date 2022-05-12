import { configureStore } from '@reduxjs/toolkit'

import productListSlice from './reducers/productLisreducer'
import productDetailSlice from './reducers/productDetailReducer'
import cartReducerSlice from './reducers/cartReducer'
<<<<<<< HEAD
import userLoginSlice from './reducers/userReducers/userLoginSlice'
import userRegisterSlice from './reducers/userReducers/userRegisterSlice'
=======
import userLoginSlice from './reducers/userReducers'
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8

export default configureStore({
  reducer: {
    productList: productListSlice,
    productDetail: productDetailSlice,
    cart: cartReducerSlice,
    userLogin: userLoginSlice,
<<<<<<< HEAD
    userRegister: userRegisterSlice,
=======
>>>>>>> 7f2c7dfbe6d088d2ab4d27d61f600723ca0815c8
  },
})

// import { applyMiddleware, combineReducers, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const reducer = combineReducers({
//   productList: productListReducers,
// })
// const initialState = {
//   products: [],
// }

// const middleware = [thunk]
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// )
