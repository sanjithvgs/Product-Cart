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
        if (state.items.hasOwnProperty(action.payload)){
            state.items[action.payload] =+1;
        }else{
            state.items[action.payload] =1;
        };
        
    },

    deleteFromCart: (state, action) =>{

    },

    increment: (state, action) =>{

    },

    decrement: (state, action) =>{

    },
     
    changeQuantity: (state, action) =>{

    }

    },
})

export const { addToCart, deleteFromCart, increment, decrement, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;