/* eslint-disable no-shadow */

import { Coffee } from './reducer';

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addCoffeeToCartAction({ id, title, price }: Coffee, quantity: number) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      itemToAdd: {
        id,
        title,
        price,
        quantity,
      },
    },
  };
}
