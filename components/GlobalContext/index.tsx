import eUser, { defaultUser } from '@/model/eUser';
import { createContext, useState } from "react"

const GlobalCtx = createContext({
    user: defaultUser,
    setUser: (prev: eUser) => { }
});

const GlobalContext = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<eUser>(defaultUser);
    return (
        <GlobalCtx.Provider value={{ user, setUser }}>
            {children}
        </GlobalCtx.Provider>
    )
}

export default GlobalContext;
export { GlobalCtx };