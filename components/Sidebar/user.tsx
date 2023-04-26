import React from 'react'
import { Cart3, GeoAlt, PersonCircle } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import { removeCookie } from 'typescript-cookie';

import style from '@/styles/header.module.scss'
import { useGContext } from '../GlobalContext';
import { defaultUser } from '@/model/eUser';

const UserSidebar = ({ callback }: { callback: Function }) => {
    const { push } = useRouter();
    const { setUser, user } = useGContext();
    const categories = [
        {
            name: 'Thông tin cá nhân',
            icon: <PersonCircle size={20} />,
            status: false,
            value: ''
        }, {
            name: 'Địa chỉ',
            icon: <GeoAlt size={20} />,
            status: false,
            value: 'address'
        }, {
            name: 'Lịch sử mua hàng',
            icon: <Cart3 size={20} />,
            status: false,
            value: 'history'
        }
    ];
    const handleSignOut = () => {
        removeCookie('user', { path: '' })
        setUser(defaultUser);
        push('/');
    }

    return (
        <div className='py-8 px-4 col-span-1 bg-red-100 min-h-[70vh]'>
            <h3 className='text-center'>{user.name}</h3>
            <ul className='py-4'>
                {
                    categories.map(cate =>
                        <li
                            className='flex items-center justify-end py-2 hover:cursor-pointer hover:underline'
                            key={cate.name}
                            onClick={() => callback(cate.value)}
                        >
                            {cate.icon}
                            <span className='grow ml-3'>{cate.name}</span>
                        </li>)
                }
            </ul>
            <div className='flex justify-center'>
                <button className='btn-dark-outline' onClick={handleSignOut}>
                    Đăng xuất
                </button>
            </div>
        </div>
    )
}

export default React.memo(UserSidebar);