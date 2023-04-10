import React, { useEffect, useState } from 'react'
import { Search, ShoppingCart, Truck, User } from 'react-feather'

import style from './header.module.scss'
import Login from '../Login';
import InfoModal from '../Modal/Info';
import { getCookie } from 'typescript-cookie';

const Header = () => {
    const [keyword, setKeyword] = useState<string>("");
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault(); //
        console.log(keyword)
    }

    useEffect(() => {
        const currentUser = getCookie('user');
        if (currentUser && parseInt(currentUser) > 0) {
            // user is customer/admin
            setIsLogin(true);
        }
    }, [])
    return (
        <>
            <nav className={style.navigation}>
                <div>
                    <h2>Header</h2>
                    <form className={style['search-box']} onSubmit={handleLookUp}>
                        <input
                            type='text'
                            placeholder='Bạn muốn tìm gì...'
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Search onClick={handleLookUp} />
                    </form>
                    <div className='flex gap-2'>
                        <button>
                            <Truck />
                            Tra cứu
                        </button>
                        <button>
                            <ShoppingCart />
                            Giỏ hàng
                        </button>
                        <button onClick={() => setLoginModal(true)}>
                            <User />
                            { isLogin ? 'Welcome' : 'Đăng nhập' }
                        </button>
                    </div>
                </div>
            </nav>
            {loginModal && (
                <InfoModal
                    exit={setLoginModal}
                    header={<Login.Header />}
                    footer={<Login.Footer />}
                >
                    <Login />
                </InfoModal>)
            }
        </>
    )
}

export default Header