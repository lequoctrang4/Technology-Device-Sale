import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Search, Cart3, Truck, PersonCircle } from 'react-bootstrap-icons'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'

import style from './header.module.scss'
import Logo from '@/asset/image/mewfone_1.png';
import Authentication from '../Authentication';
import { useGContext } from '../GlobalContext';
import Link from 'next/link';
import { getCookie } from 'typescript-cookie';
import { getProfile } from '@/pages/api/userApi';
import eUser from '@/model/eUser';

const HeaderUser = () => {
    const { push } = useRouter();
    const { cart, user, setUser } = useGContext();
    const [keyword, setKeyword] = useState("");
    const [loginModal, setLoginModal] = useState<boolean>(false);

    useEffect(() => {
        /* get token user from cookie, if it exist then set user is logged */
        const token = getCookie('user');
        if (!token || user.name) return;
        getProfile(token).then(data => {
            setUser(data[0]);
        })
    }, []);

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(keyword)
    }

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
                                user.name ? <Link href={`/profile`}>{user.name.split(' ').pop()}</Link> :
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

export default HeaderUser