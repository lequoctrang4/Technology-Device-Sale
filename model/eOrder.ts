interface pOrder {
    "id": string,
    "name": string,
    "color": string,
    "salePercent": string,
    "price": string,
    "manufacturer": string,
    "html": string,
    "image": string,
    "productID": string,
    "orderID": string,
    "discount": string,
    "quantity": string
}

interface eOrder {
    "orderId": string,
    "userId": string,
    "sessionId": string,
    "token": string,
    "status": string,
    "tax": string,
    "subTotal": string,
    "voucherId": string,
    "shippingId": string,
    "note": string,
    products: pOrder[]
}

export default eOrder;