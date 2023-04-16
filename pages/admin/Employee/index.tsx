import Style from './style.module.scss'
import { Search } from 'react-bootstrap-icons'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
import WarningModal from '@/components/WarningModal';

function CustomerList() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);


    const [activePage, setactivePage] = useState(1);
    return (
        <div className='col-span-4 p-8 flex flex-col'>
            <div className='grid grid-cols-4 gap-4 mb-4'>
                <form className={`col-span-3 ${Style.form}`}>
                    <input placeholder='Nhập tên người dùng hoặc số điện thoại' />
                    <button type='submit'> <Search /></button>
                </form>
                <div className='col-span-1 flex justify-end'>
                    <button 
                        className='bg-primary p-2 text-white rounded '
                        onClick={() => router.push('/admin/employee/add')}
                    >
                        Thêm nhân viên
                    </button>
                </div>
            </div>
            <div className='grow'>
                <table className="w-full text-sm text-left">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope="col" className="border px-6 py-3">Username</th>
                            <th scope="col" className="border px-6 py-3">Họ và tên</th>
                            <th scope="col" className="border px-6 py-3">Số điện thoại</th>
                            <th scope="col" className="border px-6 py-3">Email</th>
                            <th scope="col" className="border px-6 py-3">Vai trò</th>
                            <th scope="col" className="border px-6 py-3 text-center">Hoạt động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-6 py-3">phanhaiha14</td>
                            <td className="border px-6 py-3">Phan Hải Hà</td>
                            <td className="border px-6 py-3">0339337907</td>
                            <td className="border px-6 py-3">ha.phan@gmail.com</td>
                            <td className="border px-6 py-3">Quản lý</td>
                            <td className="border px-6 py-3 flex justify-around gap-4">
                                <button
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-4"
                                    onClick={() => router.push(`/admin/employee/phanhaiha14`)}
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
                {showModal && <WarningModal setShowModal={setShowModal} />}
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
        </div >
    );
}


export default CustomerList;