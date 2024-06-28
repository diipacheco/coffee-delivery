/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from 'immer';

import { ActionTypes } from './actions';

export interface Coffee {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export interface AddedItem extends Coffee {
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: number;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  paymentMethod: 'debito' | 'credit' | 'cash';
}

interface CartState {
  addedItems: AddedItem[];
  checkoutOrder: Order;
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, draft => {
        const itemAlreadyAdded = draft.addedItems.find(
          item => item.id === action.payload.itemToAdd.id,
        );
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.itemToAdd.quantity;
          itemAlreadyAdded.subtotal += action.payload.itemToAdd.subtotal;
        } else {
          draft.addedItems.push(action.payload.itemToAdd);
        }
      });
    case ActionTypes.INCREASE_ADDED_ITEM_QUANTITY:
      return produce(state, draft => {
        const addedItem = draft.addedItems.find(
          item => item.id === action.payload.itemToAddId,
        );
        if (addedItem) {
          addedItem.quantity += 1;
          addedItem.subtotal = addedItem.price * addedItem.quantity;
        }
      });
    case ActionTypes.DECREASE_ADDED_ITEM_QUANTITY:
      return produce(state, draft => {
        const addedItem = draft.addedItems.find(
          item => item.id === action.payload.itemToAddId,
        );
        if (addedItem) {
          addedItem.quantity -= 1;
          addedItem.subtotal -= addedItem.price;
        }
      });
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, draft => {
        draft.addedItems = draft.addedItems.filter(
          item => item.id !== action.payload.itemToRemove,
        );
      });
    case ActionTypes.CHECKOUT_ORDER: {
      return produce(state, draft => {
        draft.checkoutOrder = action.payload.order;
        draft.addedItems = [];
      });
    }
    default:
      return state;
  }
}
