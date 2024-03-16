import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateItem: (state, action) => {
            const [itemId, count ] = action.payload;
            console.log(itemId, action.payload)
            const index = state.items.findIndex(item => item.id === itemId);
            state.items[index].quantity += count
      
        },
        // originalState = {items:["pizza"]}
        clearCart: (state) => {
            // RTK - either mutate the existing state or return a new State

           // state.items.length = 0; // originalState = {items: []}

           return { items: []} ; // this new object will be replaced originalState = { items: []}
        }
    }
})

export const {addItem, removeItem,updateItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;