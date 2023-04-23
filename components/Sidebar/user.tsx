import React from 'react'
import { Cart3, GeoAlt, PersonCircle } from 'react-bootstrap-icons';
import style from '@/styles/header.module.scss'

const UserSidebar = ({ callback }: { callback: Function }) => {
    const categories = [
        {
            name: 'Thông tin cá nhân',
            icon: <PersonCircle size={20}/>,
            status: false,
            value: ''
        }, {
            name: 'Địa chỉ',
            icon: <GeoAlt size={20}/>,
            status: false,
            value: 'address'
        }, {
            name: 'Lịch sử mua hàng',
            icon: <Cart3 size={20}/>,
            status: false,
            value: 'history'
        }
    ];

    return (
        <div className={style.sidebar}>
            <h3>Hello User</h3>
            <ul>
                {
                    categories.map(cate =>
                        <li
                            className='flex items-center py-2 hover:cursor-pointer hover:underline'
                            key={cate.name}
                            onClick={() => callback(cate.value)}
                        >
                            {cate.icon}
                            <span className='grow ml-3'>{cate.name}</span>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default React.memo(UserSidebar);