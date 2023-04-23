import eUser, { defaultUser } from '@/model/eUser';
import eProduct, { defaultProduct } from '@/model/eProduct';
import { createContext, useContext, useState } from "react"

const GlobalCtx = createContext({
    user: defaultUser,
    setUser: (prev: eUser) => { },
    allProducts: [defaultProduct],
    setAllProducts: (prev: Array<eProduct>) => { }
});

const useGContext = () => useContext(GlobalCtx);

const GlobalContext = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<eUser>(defaultUser);
    const [allProducts, setAllProducts] = useState<Array<eProduct>>([]);
    const val = {
        user,
        setUser,
        allProducts,
        setAllProducts
    }
    return (
        <GlobalCtx.Provider value={val}>
            {children}
        </GlobalCtx.Provider>
    )
}

export default GlobalContext;
export { useGContext };