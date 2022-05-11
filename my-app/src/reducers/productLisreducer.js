import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// product list slice
export const productListSlice = createSlice({
  name: 'productList',
  initialState: { products: [] },
  reducers: {
    Request: state => {
      state.status = 'loading'
    },
    Success: (state, action) => {
      state.status = 'complete'
      state.products = action.payload
    },
    Fail: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

// thunk function - product action - fetches data from database via backend
const getProducts = () => async dispatch => {
  try {
    dispatch(Request())
    const { data } = await axios.get('/api/products')
    dispatch(Success(data))
  } catch (error) {
    dispatch(
      Fail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    )
  }
}
getProducts()

export { getProducts }
export const { Request, Success, Fail } = productListSlice.actions

export default productListSlice.reducer
