import React from 'react'
import { Smartphone, UserCheck, Users, List } from 'react-feather'
import style from '@/styles/header.module.scss'

const Sidebar = ({ callback }: { callback: Function }) => {
    const categories = [
        {
            name: 'Quản lý sản phẩm',
            icon: <Smartphone />,
            status: false
        },
        {
            name: 'Quản lý đơn hàng',
            icon: <List />,
            status: false
        },
        {
            name: 'Quản lý người dùng',
            icon: <Users />,
            status: false

        },
        {
            name: 'Quản lý nhân viên',
            icon: <UserCheck />,
            status: false
        }
    ]
    return (
        <div className={style.sidebar}>
            <h3 className='text-center'>Hello Admin</h3>
            <ul className='mt-4'>
                {categories.map((cate, i: number) =>
                    <li
                        className='flex py-2 hover:cursor-pointer hover:underline'
                        key={cate.name}
                        onClick={() => callback(i)}
                    >
                        {cate.icon}
                        <span className='ml-4'>{cate.name}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default React.memo(Sidebar)