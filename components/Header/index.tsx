import React, { useCallback, useEffect, useState } from 'react'
import { Search, Cart3, Truck, PersonCircle, List } from 'react-bootstrap-icons'
import { getCookie } from 'typescript-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';

import style from './header.module.scss'
import Authentication from '../Authentication';
import logo from '@/asset/image/mewfone_1.png'
import Image from 'next/image';

const Header = () => {
    const route = useRouter();
    const [keyword, setKeyword] = useState<string>("");
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [spill, setSpill] = useState(false);

    const handleLookUp = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(keyword)
    }

    useCallback(() => {
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
                    <Link href='/' className='self-center'>
                        <Image src={logo} alt="logo" width={100} className='' />
                    </Link>
                    <form className={style['search-box']} onSubmit={handleLookUp}>
                        <input
                            type='text'
                            placeholder='Bạn muốn tìm gì...'
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <Search onClick={handleLookUp} />
                    </form>
                    <div 
                        className='relative' 
                        onMouseEnter={()=>setSpill(true)} 
                        onMouseOut={()=>setSpill(false)}
                    >
                        <button 
                            className='md:hidden' 
                            onClick={() => setSpill(!spill)}
                        >
                            <List size={24} />
                        </button>
                        <div className={style[`direct${spill ? '__active' : ''}`]}>
                            <button>
                                <Truck size={20}/>
                                Tra cứu
                            </button>
                            <button onClick={() => route.push('/cart')}>
                                <Cart3 size={20}/>
                                Giỏ hàng
                            </button>
                            <button onClick={() => setLoginModal(true)}>
                                <PersonCircle size={20}/>
                                {isLogin ? 'Welcome' : 'Đăng nhập'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {loginModal && <Authentication callback={setLoginModal} />}
        </>
    )
}

export default Header