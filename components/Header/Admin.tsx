import React from 'react'
import style from './header.module.scss'
import { Gear, Bell } from 'react-bootstrap-icons'
import logo from '../../asset/image/mewfone_1.png'
import Image from 'next/image'

const HeaderAdmin = () => {
    return (
        <nav className={style.navigation}>
            <div>
                <h1>Mewfone</h1>
                <Image
                    src={logo}
                    alt="logo"
                    width={100}
                />
                <div className='flex flex-row gap-6'>
                    <button className='flex justify-center bg-red-500 rounded-lg px-2'>
                        Thông báo
                        <Bell />
                    </button>
                    <button className='flex justify-center bg-red-500 rounded-lg px-2'>
                        Cài đặt
                        <Gear />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HeaderAdmin;