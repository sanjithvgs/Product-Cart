import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const productListSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setProduct: (state, action) => {
        state.list = action.payload
    },

    },
})

export const { setProduct } = productListSlice.actions;

export default productListSlice.reducer;