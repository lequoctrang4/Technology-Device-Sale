import Style from './style.module.scss'
import { Edit, Search } from 'react-feather'
import React, { useState } from 'react'
import WarningModal from '@/components/WarningModal';

function CustomerList() {
    const [activePage, setactivePage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [activeListpage, setActiveListpage] = useState(true);
    const [activeAddpage, setActiveAddpage] = useState(false);
    const [activeInfopage, setActiveInfopage] = useState(false);

    return (
        <div className='col-span-4 p-8 flex flex-col'>
            <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Quản lý khách hàng
                        </a>
                    </li>
                    {activeAddpage && 
                    <li>
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>}
                    {activeInfopage && <li aria-current="page">
                        <div className="flex items-center">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
                        </div>
                    </li>}
                </ol>
            </nav>
            {activeListpage && <>
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
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-4">
                                        Đơn hàng
                                    </button>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex-4">
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
            </ >}
        </div>
    );
}


export default CustomerList;