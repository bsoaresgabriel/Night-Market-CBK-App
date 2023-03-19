import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice';

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;