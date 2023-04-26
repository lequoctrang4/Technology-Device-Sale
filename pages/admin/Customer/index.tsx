import { PencilSquare, Search } from 'react-bootstrap-icons'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Style from './style.module.scss'
import WarningModal from '@/components/WarningModal';
import { useDirect, useGContext } from '@/components/GlobalContext';

function CustomerList() {
    const [activePage, setactivePage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeListpage, setActiveListpage] = useState(true);
    
    useDirect();
    const router = useRouter();

    const username = router.query.username;

    return (
        <div className='col-span-4 p-8 flex flex-col'>
            {<>
                <form className={`mb-4 ${Style.form}`}>
                    <input placeholder='Nhập tên người dùng hoặc số điện thoại' />
                    <button type='submit'> <Search /></button>
                </form>
                <div className='grow'>
                    <table className="w-full text-sm text-left">
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                            <tr>
                                <th scope="col" className="border px-6 py-3">Username</th>
                                <th scope="col" className="border px-6 py-3">Họ và tên</th>
                                <th scope="col" className="border px-6 py-3">Số điện thoại</th>
                                <th scope="col" className="border px-6 py-3">Email</th>
                                <th scope="col" className="border px-6 py-3 text-center">Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-6 py-3">phanhaiha14</td>
                                <td className="border px-6 py-3">Phan Hải Hà</td>
                                <td className="border px-6 py-3">0339337907</td>
                                <td className="border px-6 py-3">ha.phan@gmail.com</td>
                                <td className="border px-6 py-3 flex justify-around gap-4">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-4"
                                        onClick={() => router.push(`/admin/customer/phanhaiha14/order_history`)}
                                    >
                                        Đơn hàng
                                    </button>
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-4"
                                        onClick={() => router.push(`/admin/customer/phanhaiha14`)}
                                    >
                                        Thông tin
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex-4"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {showModal && <WarningModal setShowModal={setShowModal}>
                        <h3
                            className="text-base font-semibold leading-6 text-gray-900"
                            id="modal-title">
                            Xóa phanhaiha14
                        </h3>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Bạn có muốn xóa tài khoản phanhaiha14? Sau khi xóa, dữ liệu không thể khôi phục.
                            </p>
                        </div>
                    </WarningModal>}
                </div>
                <div className='flex justify-center justify-self-end'>
                    <button className='rounded-tl rounded-bl border border-gray-900 p-1'>Prev</button>
                    {[1, 2, 3].map((page: number) =>
                        <button
                            onClick={() => setactivePage(page)}
                            key={page}
                            className={activePage !== page ? Style.page_btn : Style.page_btn__active}
                        >
                            {page}
                        </button>
                    )}
                    <button className='rounded-tr rounded-br border border-gray-900 p-1'>Next</button>
                </div>
            </ >}
        </div>
    );
}


export default CustomerList;