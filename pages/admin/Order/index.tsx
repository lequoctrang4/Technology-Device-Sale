import React, { useEffect, useState } from 'react'
import { Search } from 'react-feather';
import style from './order.module.scss';
import Pagination from '@/components/Pagination';

const Orders = () => {
    const [index, setIndex] = useState(0);
    const [users, setUsers] = useState([]);
    const states = ['Đã xác nhận', 'Đang giao', 'Đã giao'];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div className='p-8 col-span-4'>
            <h3 className='font-normal'>Quản lý đơn hàng</h3>
            <div className='flex justify-between my-4'>
                <ul className={style._states}>
                    {
                        states.map((s: string, i: number) =>
                            <li
                                key={i}
                                className={i === index ? style.active : ''}
                                onClick={() => setIndex(i)}
                            >
                                {s}
                            </li>
                        )
                    }
                </ul>
                <form className={style.form}>
                    <input placeholder='Nhập mã sản phẩm hoặc từ khóa' />
                    <button type='submit'> <Search /></button>
                </form>
            </div>
            <div>
                {
                    users.map((user: any, i: number) => {
                        return (<div className='mb-4 bg-secondary p-3 rounded' key={i}>
                            <div className='flex justify-between'>
                                <div>
                                    <h4>Đơn hàng: #00000{i}</h4>
                                    <p>
                                        Trạng thái:{' '}
                                        <span className='italic'>Đang chờ</span>
                                    </p>
                                </div>
                                <div>
                                    <button className='bg-red-500 text-white p-2 rounded mr-4'>Xác nhận</button>
                                    <button className='bg-green-500 text-white p-2 rounded'>Hủy bỏ</button>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <table className={style.list}>
                                    <tr>
                                        <th>Tên khách hàng</th>
                                        <td> {user.name} </td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td> {user.email} </td>
                                    </tr>
                                    <tr>
                                        <th>Số điện thoại</th>
                                        <td> {user.phone} </td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ</th>
                                        <td> {user.address.street}, {user.address.suite}, {user.address.city} </td>
                                    </tr>
                                </table>
                                <table className={style.detail}>
                                    <thead>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá tiền</th>
                                    </thead>
                                    <tbody className='text-center'>
                                        <tr>
                                            <td>iPhone 11 Promax</td>
                                            <td>x1</td>
                                            <td>20.000.000 VND</td>
                                        </tr>
                                        <tr>
                                            <td>iPhone 11 Promax</td>
                                            <td>x1</td>
                                            <td>20.000.000 VND</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>)
                    })
                }
            </div>
            {/* Pages */}
            <Pagination />
        </div>
    )
}

export default Orders