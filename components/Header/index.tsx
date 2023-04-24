import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Search, Cart3, Truck, Person } from 'react-bootstrap-icons'
import { getCookie } from 'typescript-cookie';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

import style from './header.module.scss'
import Logo from '@/asset/image/mewfone_1.png';
import Authentication from '../Authentication';
import { useRouter } from 'next/router';
import { getProfile } from '@/pages/api/userApi';


const Header = () => {
    const { push } = useRouter();
    const [keyword, setKeyword] = useState<string>("");
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    // const [userToken, setUserToken] = useState();

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(keyword)
    }

    /* useEffect(() => {
        const userToken = getCookie('user')
        console.log(userToken);
    }, []); */

    return (
        <>
            <nav className={style.navigation}>
                <div className='main'>
                    <Image 
                        src={Logo} 
                        alt='' 
                        width={80} 
                        onClick={()=>push('/')}
                        className='hover:cursor-pointer'
                    />
                    <form className={style['search-box']} onSubmit={handleLookUp}>
                        <input
                            type='text'
                            placeholder='Bạn muốn tìm gì...'
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Search onClick={handleLookUp} />
                    </form>
                    <div className={style.direct}>
                        <button>
                            <Truck size={16} />
                            Tra cứu
                        </button>
                        <button onClick={() => push('/cart')}>
                            <Cart3 size={16} />
                            Giỏ hàng
                        </button>
                        <button onClick={() => setLoginModal(true)}>
                            <Person size={16} />
                            {isLogin ? 'Welcome' : 'Đăng nhập'}
                        </button>
                    </div>
                </div>
            </nav>
            {loginModal && (<Authentication callback={setLoginModal} />)}
            <ReactNotifications />
        </>
    )
}

export default Header