import { Action, Dispatch, Store } from "@reduxjs/toolkit";
import { addProduct, fetchCoupon, subTotalSelector } from "../features/cartSlice";
import { RootState } from "../store";


export const couponMiddlewares = (store: Store) => (next: Dispatch) => (action: Action) => {
    if (action.type === addProduct.type) {
        next(action)
        const state: RootState = store.getState()
        const subTotal = subTotalSelector(state)
        store.dispatch(fetchCoupon({ couponCode: state.cart.coupon.code, subTotal: subTotal, shopId: state.cart.shopId}) as unknown as Action)
    }
}
