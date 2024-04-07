import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {
        // productID1 : 1,
        // productID2 : 5
    },
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items[action.payload] =1; 
    },

    deleteFromCart: (state, action) =>{
        delete state.items[action.payload];
    },

    increment: (state, action) =>{
        state.items[action.payload] +=1;
    },

    decrement: (state, action) =>{
        if (state.items[action.payload]<=1){
            delete state.items[action.payload];
        }else{
        state.items[action.payload] -=1
        }
    },
     
    changeQuantity: (state, action) =>{
        const productID = action.payload.productID;
        const value = action.payload.value;
        state.items[productID] = Number(value);
    }

    },
})

export const { addToCart, deleteFromCart, increment, decrement, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;