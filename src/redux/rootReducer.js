import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { goodsApi } from './api';
import { favoriteReducer } from './favoriteSlice';
import { basketReducer } from './basketSlice';
import { goodsReducer } from './goodsSlice';
import { modalAddToBasketReducer } from './modalAddToBasketSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['modalAddToBasket'],
}

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  basket: basketReducer,
  goods: goodsReducer,
  modalAddToBasket: modalAddToBasketReducer,
  [goodsApi.reducerPath]: goodsApi.reducer,
});


export const persistedReducer = persistReducer(persistConfig, rootReducer)

