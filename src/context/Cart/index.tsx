import { createContext, useContext, useReducer } from 'react';

import { AddedItem, Coffee, cartReducer } from '../../reducers/cart/reducer';
import { addCoffeeToCartAction } from '../../reducers/cart/actions';

interface ICartContext {
  addedItems: AddedItem[];
  // eslint-disable-next-line no-unused-vars
  addCoffeeToCart: (itemToAdd: Coffee, quantity: number) => void;
}

const CartContext = createContext({} as ICartContext);

interface CartContextProviderProps {
  children: React.ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    addedItems: [],
  });

  function addCoffeeToCart(itemToAdd: Coffee, quantity: number) {
    dispatch(addCoffeeToCartAction(itemToAdd, quantity));
  }

  const { addedItems } = cartState;
  return <CartContext.Provider value={{ addedItems, addCoffeeToCart }}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
