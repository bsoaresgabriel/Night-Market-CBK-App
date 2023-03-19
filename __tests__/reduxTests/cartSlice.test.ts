import { configureStore } from '@reduxjs/toolkit';
import CartSlice, { addItem, removeItem, decrementItemQuantity } from '../../src/Store/CartSlice';

const createStore = () => {
  return configureStore({
    reducer: {
      Cart: CartSlice,
    },
  });
};

describe('CartSlice', () => {
  test('should add item to Cart', () => {
    const store = createStore();
    const item = {
      id: '1',
      itemImage: 'https://example.com/image.jpg',
      itemName: 'Cyber Gadget',
      itemManufacturer: 'TechCorp',
      corpoLogo: 'https://example.com/logo.jpg',
      itemSalesPitch: 'The latest and greatest cyber gadget!',
      itemFunctionality: 'Enhances your cyber capabilities',
    };

    store.dispatch(addItem(item));
    const state = store.getState().Cart;

    expect(state.items).toEqual([{ item, quantity: 1 }]);
  });

  test('should remove item from Cart', () => {
    const store = createStore();
    const item = {
      id: '1',
      itemImage: 'https://example.com/image.jpg',
      itemName: 'Cyber Gadget',
      itemManufacturer: 'TechCorp',
      corpoLogo: 'https://example.com/logo.jpg',
      itemSalesPitch: 'The latest and greatest cyber gadget!',
      itemFunctionality: 'Enhances your cyber capabilities',
    };
    store.dispatch(addItem(item));

    store.dispatch(removeItem(item.id));
    const state = store.getState().Cart;

    expect(state.items).toEqual([]);
  });

  test('should decrement item quantity in Cart', () => {
    const store = createStore();
    const item = {
      id: '1',
      itemImage: 'https://example.com/image.jpg',
      itemName: 'Cyber Gadget',
      itemManufacturer: 'TechCorp',
      corpoLogo: 'https://example.com/logo.jpg',
      itemSalesPitch: 'The latest and greatest cyber gadget!',
      itemFunctionality: 'Enhances your cyber capabilities',
    };
    store.dispatch(addItem(item));
    store.dispatch(addItem(item));

    store.dispatch(decrementItemQuantity(item.id));
    const state = store.getState().Cart;

    expect(state.items).toEqual([{ item, quantity: 1 }]);
  });
});