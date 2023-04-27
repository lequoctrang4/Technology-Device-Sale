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
    setCategories: () => { },
    kw: '',
    setKw: () => { },
    productFilter: Function
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
    const [kw, setKw] = useState("");
    const [categories, setCategories] = useState<eCate[]>([]);

    const addItemToCart = (product: eProduct) => {
        const newCart = { ...cart };
        console.group('Begin: ');
        // console.log(cart);
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
        // console.log(cart);
        console.groupEnd()
    }

    const productFilter = (arr?: eProduct[]) => {
        if (!arr) arr = allProducts;
        return arr.filter(p => p.name.toUpperCase().includes(kw.toUpperCase())) ||
            arr.filter(p => p.name.toLowerCase().includes(kw.toLowerCase())) ||
            arr.filter(p => p.manufacturer.toLowerCase().includes(kw.toLowerCase())) ||
            arr.filter(p => p.manufacturer.toUpperCase().includes(kw.toUpperCase())) ||
            arr.filter(p => p.id.toLowerCase().includes(kw.toLowerCase())) ||
            arr.filter(p => p.id.toUpperCase().includes(kw.toUpperCase()))
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
        setCategories,
        kw,
        setKw,
        productFilter
    }
    return (
        <GlobalCtx.Provider value={val}>
            {children}
        </GlobalCtx.Provider>
    )
}

export default GlobalContext;
export { useGContext, useDirect };