import React from 'react'
import { Smartphone, UserCheck, Users, List } from 'react-feather'
import style from '@/styles/header.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Sidebar = () => {
    const router = useRouter();
    const categories = [
        {
            name: 'Quản lý sản phẩm',
            icon: <Smartphone />,
            status: false,
            url: 'product'
        },
        {
            name: 'Quản lý đơn hàng',
            icon: <List />,
            status: false,
            url: 'order'
        },
        {
            name: 'Quản lý khách hàng',
            icon: <Users />,
            status: false,
            url: 'customer'
        },
        {
            name: 'Quản lý nhân viên',
            icon: <UserCheck />,
            status: false,
            url: 'employee'
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
                    >
                        {cate.icon}
                        <Link className='ml-4' href={`/admin/${cate.url}`}>{cate.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default React.memo(Sidebar)