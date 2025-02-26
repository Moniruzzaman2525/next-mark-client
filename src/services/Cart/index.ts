"use server"


import { ICoupon, IOrder } from "@/types"
import { cookies } from "next/headers"

export const createOrder = async (order: IOrder) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
            method: 'POST',
            headers: {
                Authorization: (await cookies()).get('accessToken')!.value,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        const result = await res.json()
        return result
    } catch (error: any) {
        return Error(error)
    }
}
export const addCoupon = async ({ shopId, subTotal, couponCode }: ICoupon) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/coupon/${couponCode}`, {
            method: 'POST',
            headers: {
                Authorization: (await cookies()).get('accessToken')!.value,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                orderAmount: subTotal,
                shopId
            })
        })
        const result = await res.json()
        return result
    } catch (error: any) {
        return Error(error)
    }
}
