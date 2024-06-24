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

export interface AddedItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  addedItems: AddedItem[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.addedItems.find((item) => item.id === action.payload.itemToAdd.id);
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.itemToAdd.quantity;
        } else {
          draft.addedItems.push(action.payload.itemToAdd);
        }
      });
    default:
      return state;
  }
}
