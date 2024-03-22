import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurantId: '',
        latitude: '13.0250302',
        longitude: '77.53402419999999',
        address: 'Yestwantpur'
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

            const index = state.items.findIndex(item => item.id === itemId);
            state.items[index].quantity += count
      
        },
        // originalState = {items:["pizza"]}
        clearCart: (state) => {
            // RTK - either mutate the existing state or return a new State

           // state.items.length = 0; // originalState = {items: []}

           return { items: []} ; // this new object will be replaced originalState = { items: []}
        },
        updateResId: (state, action) => {
            state.restaurantId = action.payload;
            console.log(state.restaurantId)

        },
        updateAddress: (state, action) => {
            state.address = action.payload;
        },
        updateLocation: (state, action) => {
            const [lat,lon] = action.payload;
     
            state.latitude = lat;
            state.longitude = lon;
            console.log(state.latitude, state.longitude)
        }
    }
})

export const {addItem, removeItem,updateItem, clearCart, updateResId,updateAddress, updateLocation} = cartSlice.actions;

export default cartSlice.reducer;