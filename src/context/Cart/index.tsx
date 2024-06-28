import { createContext, useContext, useReducer } from 'react';

import { AddedItem, Order, cartReducer } from '../../reducers/cart/reducer';
import {
  addCoffeeToCartAction,
  decreaseAddedItemQuantityAction,
  increaseAddedItemQuantityAction,
  removeCoffeeFromCartAction,
  checkoutOrderAction,
} from '../../reducers/cart/actions';

interface ICartContext {
  addedItems: AddedItem[];
  checkoutOrder: Order;
  // eslint-disable-next-line no-unused-vars
  addCoffeeToCart: (itemToAdd: AddedItem, quantity: number) => void;
  // eslint-disable-next-line no-unused-vars
  increaseAddedItemQuantity: (itemToAddId: string) => void;
  // eslint-disable-next-line no-unused-vars
  decreaseAddedItemQuantity: (itemToAddId: string) => void;
  // eslint-disable-next-line no-unused-vars
  removeCoffeeFromCart: (itemToRemove: string) => void;
  // eslint-disable-next-line no-unused-vars
  checkout: (order: Order) => void;
}

const CartContext = createContext({} as ICartContext);

interface CartContextProviderProps {
  children: React.ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    addedItems: [],
    checkoutOrder: {} as Order,
  });

  function addCoffeeToCart(itemToAdd: AddedItem, quantity: number) {
    dispatch(addCoffeeToCartAction(itemToAdd, quantity));
  }

  function increaseAddedItemQuantity(itemToAddId: string) {
    dispatch(increaseAddedItemQuantityAction(itemToAddId));
  }

  function decreaseAddedItemQuantity(itemToAddId: string) {
    dispatch(decreaseAddedItemQuantityAction(itemToAddId));
  }

  function removeCoffeeFromCart(itemToRemove: string) {
    dispatch(removeCoffeeFromCartAction(itemToRemove));
  }

  function checkout(order: Order) {
    dispatch(checkoutOrderAction(order));
  }

  const { addedItems, checkoutOrder } = cartState;
  return (
    <CartContext.Provider
      value={{
        addedItems,
        checkoutOrder,
        addCoffeeToCart,
        removeCoffeeFromCart,
        increaseAddedItemQuantity,
        decreaseAddedItemQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
