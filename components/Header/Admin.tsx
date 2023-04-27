import React from 'react'
import style from './header.module.scss'
import { Gear, Bell, BoxArrowRight } from 'react-bootstrap-icons'
import logo from '../../asset/image/mewfone_1.png'
import Image from 'next/image'
import { removeCookie } from 'typescript-cookie'
import { useGContext } from '../GlobalContext'
import { useRouter } from 'next/router'
import { defaultUser } from '@/model/eUser'

const HeaderAdmin = () => {
    const { setUser } = useGContext();
    const { push } = useRouter();
    const handleSignOut = () => {
        removeCookie('user', { path: '' })
        setUser(defaultUser);
        push('/');
    }
    return (
        <nav className={style.navigation}>
            <div className='w-11/12 mx-auto'>
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    onClick={() => push('/')}
                    className='hover:cursor-pointer'
                />
                <div className='flex flex-row gap-6'>
                    <button className='flex items-center justify-center bg-red-500 rounded-lg px-2'>
                        Thông báo
                        <Bell className='ml-2'/>
                    </button>
                    <button className='flex items-center justify-center bg-red-500 rounded-lg px-2'>
                        Cài đặt
                        <Gear className='ml-2'/>
                    </button>
                    <button
                        className='hover:underline hover:cursor-pointer flex items-center'
                        onClick={handleSignOut}
                    >
                        Đăng xuất
                        <BoxArrowRight className='ml-2'/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAdmin;