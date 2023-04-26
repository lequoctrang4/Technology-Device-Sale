import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react"
import { defaultUser } from '@/model/eUser';
import eProduct, { defaultProduct } from '@/model/eProduct';
import { defaultCart } from '@/model/eCart';
import eCate from '@/model/eCate';
import menuContext from '@/model/menuContext';
import { useRouter } from "next/router";

const GlobalCtx = createContext<menuContext>({
    user: defaultUser,
    setUser: () => { },
    allProducts: [defaultProduct],
    setAllProducts: () => { },
    cart: defaultCart,
    setCart: () => { },
    addItemToCart: (product: eProduct) => { },
    categories: [],
    setCategories: () => { }
});

const useGContext = () => useContext(GlobalCtx);

const useDirect = () => {
    const { user } = useGContext();
    const { push } = useRouter();
    useEffect(() => {
        user.isAdmin === '0' && push('/');
    }, []);
}

const GlobalContext = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState(defaultUser);
    const [allProducts, setAllProducts] = useState<Array<eProduct>>([]);
    const [cart, setCart] = useState(defaultCart);
    const [categories, setCategories] = useState<eCate[]>([]);

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
        addItemToCart,
        categories,
        setCategories
    }
    return (
        <GlobalCtx.Provider value={val}>
            {children}
        </GlobalCtx.Provider>
    )
}

export default GlobalContext;
export { useGContext, useDirect };