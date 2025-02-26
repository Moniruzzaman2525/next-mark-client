import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './features/cartSlice'
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from './storage'
import { couponMiddlewares } from './middlewares/coupon.middlewares'

const persistOption = {
    key: 'cart',
    storage
}

const persistedCart = persistReducer(persistOption, cartReducer)

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartReducer
        },
        middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(couponMiddlewares)
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
