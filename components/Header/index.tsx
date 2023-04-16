import React, { useEffect, useState } from 'react'
import { Search, Cart3, Truck, PersonCircle } from 'react-bootstrap-icons'

import style from './header.module.scss'
import InfoModal from '../Modal/Info';
import { getCookie } from 'typescript-cookie';
import Authentication from '../Authentication';
import Link from 'next/link';

const Header = () => {
    const [keyword, setKeyword] = useState<string>("");
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
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
                <div className='main'>
                    <Link href='/'>
                        <h2>Header</h2>
                    </Link>
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
                            <Cart3 />
                            Giỏ hàng
                        </button>
                        <button onClick={() => setLoginModal(true)}>
                            <PersonCircle />
                            {isLogin ? 'Welcome' : 'Đăng nhập'}
                        </button>
                    </div>
                </div>
            </nav>
            {loginModal && <Authentication callback={setLoginModal} />}
        </>
    )
}

export default Header