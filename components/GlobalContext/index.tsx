import eUser, { defaultUser } from '@/model/eUser';
import eProduct, { defaultProduct } from '@/model/eProduct';
import eCart, { defaultCart } from '@/model/eCart';
import { createContext, useContext, useState } from "react"

const GlobalCtx = createContext({
    user: defaultUser,
    setUser: (prev: eUser) => { },
    allProducts: [defaultProduct],
    setAllProducts: (prev: Array<eProduct>) => { },
    cart: defaultCart,
    setCart: (prev: eCart) => { },
    addItemToCart: (product: eProduct) => { }
});

const useGContext = () => useContext(GlobalCtx);

const GlobalContext = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<eUser>(defaultUser);
    const [allProducts, setAllProducts] = useState<Array<eProduct>>([]);
    const [cart, setCart] = useState(defaultCart);
    const addItemToCart = (product: eProduct) => {
        const newCart = { ...cart };
        console.group('Begin: ');
        console.log(cart);
        if (newCart.detail.length === 0) {
            newCart.detail.push({
                quantity: 1,
                product: product,
                isSelected: false
            });
        }
        else {
            const match = newCart.detail.find(_ => _.product.id === product.id);
            if (match) {
                match.quantity += 1;
            } else {
                newCart.detail.push({
                    quantity: 1,
                    product: product,
                    isSelected: false
                });
            }
            newCart.quantity = newCart.detail.reduce((total, _) => total + _.quantity, 0)
        }
        setCart(newCart)
        console.log(cart);
        console.groupEnd()
    }

    const val = {
        user,
        setUser,
        allProducts,
        setAllProducts,
        cart,
        setCart,
        addItemToCart
    }
    return (
        <GlobalCtx.Provider value={val}>
            {children}
        </GlobalCtx.Provider>
    )
}

export default GlobalContext;
export { useGContext };