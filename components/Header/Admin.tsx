import React from 'react'
import style from './header.module.scss'
import { Settings, Bell } from 'react-feather'
import logo from '../../asset/image/mewfone.png'
import Image from 'next/image'

const HeaderAdmin = () => {
    return (
        <nav className={style.navigation}>
            <div>
                <h1>Mewfone</h1>
                {/* <Image
                    src={logo}
                    alt="logo"
                    width={100}
                /> */}
                <div className='flex flex-row gap-6'>
                    <button className='flex justify-center bg-red-500 rounded-lg px-2'>
                        Thông báo
                        <Bell />
                    </button>
                    <button className='flex justify-center bg-red-500 rounded-lg px-2'>
                        Cài đặt
                        <Settings />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAdmin;