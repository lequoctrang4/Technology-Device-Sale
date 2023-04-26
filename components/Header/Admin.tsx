import React from 'react'
import style from './header.module.scss'
import { Gear, Bell } from 'react-bootstrap-icons'
import logo from '../../asset/image/mewfone_1.png'
import Image from 'next/image'

const HeaderAdmin = () => {
    return (
        <nav className={style.navigation}>
            <div className='w-11/12 mx-auto'>
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                />
                <div className='flex flex-row gap-6'>
                    <button className='flex items-center justify-center bg-red-500 rounded-lg px-2'>
                        Thông báo
                        <Bell className='ml-3' />
                    </button>
                    <button className='flex items-center justify-center bg-red-500 rounded-lg px-2'>
                        Cài đặt
                        <Gear className='ml-3' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAdmin;