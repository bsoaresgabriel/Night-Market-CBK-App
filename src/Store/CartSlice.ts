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
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;