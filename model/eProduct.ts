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

const defaultProduct = {
    id: "",
    name: "",
    manufacturer: "",
    price: "",
    html: "",
    image: "",
    salePercent: "",
    color: "",
} as eProduct;

export default eProduct;
export {defaultProduct};