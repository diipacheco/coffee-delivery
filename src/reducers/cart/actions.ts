/* eslint-disable no-shadow */
import { AddedItem } from './reducer';

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',

  INCREASE_ADDED_ITEM_QUANTITY = 'INCREASE_ADDED_ITEM_QUANTITY',
  DECREASE_ADDED_ITEM_QUANTITY = 'DECREASE_ADDED_ITEM_QUANTITY',
}

export function addCoffeeToCartAction(
  { id, title, price, image, subtotal }: AddedItem,
  quantity: number,
) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      itemToAdd: {
        id,
        image,
        title,
        price,
        quantity,
        subtotal,
      },
    },
  };
}

export function removeCoffeeFromCartAction(itemToRemove: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      itemToRemove,
    },
  };
}

export function increaseAddedItemQuantityAction(itemToAddId: string) {
  return {
    type: ActionTypes.INCREASE_ADDED_ITEM_QUANTITY,
    payload: {
      itemToAddId,
    },
  };
}

export function decreaseAddedItemQuantityAction(itemToAddId: string) {
  return {
    type: ActionTypes.DECREASE_ADDED_ITEM_QUANTITY,
    payload: {
      itemToAddId,
    },
  };
}
