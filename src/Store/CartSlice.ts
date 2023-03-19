import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../Models/Item';

type CartItem = {
  item: Item;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingCartItem = state.items.find(
        (cartItem) => cartItem.item.id === action.payload.id,
      );

      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        state.items.push({ item: action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((cartItem) => cartItem.item.id !== action.payload);
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const existingCartItem = state.items.find(
        (cartItem) => cartItem.item.id === action.payload,
      );

      if (existingCartItem && existingCartItem.quantity > 1) {
        existingCartItem.quantity -= 1;
      } else {
        state.items = state.items.filter((cartItem) => cartItem.item.id !== action.payload);
      }
    },
  },
});

export const { addItem, removeItem, decrementItemQuantity } = CartSlice.actions;

export default CartSlice.reducer;