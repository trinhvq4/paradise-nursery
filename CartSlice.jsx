import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold the plants added to the cart
    totalQuantity: 0, // Total number of items in the cart (for the badge)
  },
  reducers: {
    // 1. Add Item: Adds a plant or increments quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // 2. Remove Item: Removes a plant from the cart entirely based on its name
    removeItem: (state, action) => {
      // payload is expected to be the name of the plant string
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // 3. Update Quantity: Increases or decreases the count of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        
        // Optional: If quantity drops to 0, logic to remove it could go here,
        // or be handled by the component dispatching 'removeItem'
      }
    },
  },
});

// Export the action creators to be used in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to be wired into the store
export default CartSlice.reducer;
