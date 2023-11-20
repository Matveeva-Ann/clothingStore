import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { goodsApi } from './api';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import { persistedReducer } from './rootReducer';


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(goodsApi.middleware),
})

export const persistor = persistStore(store);

setupListeners(store.dispatch)
