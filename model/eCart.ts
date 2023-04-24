import { eItem } from "./eProduct";

interface eCart {
    quantity: number,
    detail: eItem[]
}

export const defaultCart = {
    quantity: 0,
    detail: []
} as eCart

export default eCart;