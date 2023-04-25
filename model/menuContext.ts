import { Dispatch, SetStateAction } from "react";
import eUser from "./eUser";
import eProduct from "./eProduct";
import eCart from "./eCart";
import eCate from "./eCate";

interface menuContext {
    user: eUser,
    setUser: Dispatch<SetStateAction<eUser>>,
    allProducts: eProduct[],
    setAllProducts: Dispatch<SetStateAction<eProduct[]>>,
    cart: eCart,
    setCart: Dispatch<SetStateAction<eCart>>,
    addItemToCart: Function,
    categories: eCate[],
    setCategories: Dispatch<SetStateAction<eCate[]>>
}

export default menuContext;