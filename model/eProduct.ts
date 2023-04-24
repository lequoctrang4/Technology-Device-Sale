interface eProduct {
    id: string,
    name: string,
    manufacturer: string,
    price: string,
    html: string,
    image: string | null,
    salePercent: string,
    color: string,
}

export const defaultProduct = {
    id: "",
    name: "",
    manufacturer: "",
    price: "",
    html: "",
    image: "",
    salePercent: "",
    color: "",
} as eProduct;

export interface eItem {
    quantity: number,
    product: eProduct,
    isSelected: boolean
}

export default eProduct;