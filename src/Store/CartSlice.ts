import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Models/Item';

type CartState = {
  items: Item[];
};

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;