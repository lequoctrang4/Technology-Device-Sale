import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Search, Cart3, Truck, PersonCircle } from 'react-bootstrap-icons'
import { getCookie } from 'typescript-cookie';
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

import style from './header.module.scss'
import Logo from '@/asset/image/mewfone_1.png';
import Authentication from '../Authentication';
import { useGContext } from '../GlobalContext';
import { getProfile } from '@/pages/api/userApi';
import eUser from '@/model/eUser';
import Link from 'next/link';

const Header = () => {
    const { push } = useRouter();
    const { user, setUser, cart } = useGContext();
    const [token, setToken] = useState('');
    const [keyword, setKeyword] = useState("");
    const [loginModal, setLoginModal] = useState<boolean>(false);

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(keyword)
    }

    useEffect(() => {
        const tk = getCookie('user');
        tk && setToken(tk);
    }, [])

    useEffect(() => {
        if (token) {
            getProfile(token).then(data => {
                const user: eUser = {
                    ...data[0],
                    isAdmin: data[0].isAdmin === '1' ? true : false
                };
                setUser(user)
            })
        }
    }, [token])

    return (
        <>
            <nav className={style.navigation}>
                <div className='main'>
                    <Image
                        src={Logo}
                        alt=''
                        width={80}
                        onClick={() => push('/')}
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
                        <button onClick={() => push('/cart')} className='relative'>
                            <Cart3 size={16} />
                            Giỏ hàng
                            <div className={style['cart-quantity']}>
                                {cart.quantity}
                            </div>
                        </button>
                        <button>
                            <PersonCircle size={16} />
                            {
                                user.name ? <Link href={`/profile/${user.id}`}>{user.name.split(' ').pop()}</Link> :
                                    <span onClick={() => setLoginModal(true)}>Đăng nhập</span>
                            }
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