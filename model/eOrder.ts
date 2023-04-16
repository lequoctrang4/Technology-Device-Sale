import eProduct from "./eProduct";

interface eOrder {
    id: string,
    status: string,
    userDetail: any,
    detail: Array<eProduct>
}

export default eOrder;