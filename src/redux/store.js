import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers.js'
import {
    persistStore, persistReducer,
   } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import {
    createStateSyncMiddleware,
    initMessageListener,
} from "redux-state-sync";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducers = persistReducer(persistConfig, todosReducer);
//  const store = configureStore({
//     reducer: {
//          todos: persistedReducers,
//      },

//  })
const store = configureStore({
    reducer: {
        todos: persistedReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(createStateSyncMiddleware({
            blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
        })).concat(logger),
})

initMessageListener(store)
export { store }
export const persistor = persistStore(store)
