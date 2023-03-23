import React, { useState } from 'react'
import { Edit, Search } from 'react-feather'
import style from './style.module.scss'

const PlaceholderImage = ({ w, h }: { w: string, h?: string }) =>
    <div style={{ width: w, height: h, backgroundColor: '#ccc' }} />

const Products = () => {
    const [activePage, setactivePage] = useState(1); 
    return (
        <div className='py-8 pl-8 flex flex-col col-span-4'>
            {/* Filter */}
            <div className='grid grid-cols-6 gap-4'>
                <form className={`col-start-1 col-span-4 ${style.form}`}>
                    <input placeholder='Nhập mã sản phẩm hoặc từ khóa' />
                    <button type='submit'> <Search /></button>
                </form>

                <div className={`${style.dropdown} col-span-1`}>
                    <p className='rounded'>Bộ lọc</p>
                    <ul className='rounded'>
                        <li className={style.dropdown_sub}>
                            Theo thương hiệu
                            <ul>
                                <li>Samsung</li>
                                <li>Apple</li>
                                <li>Nokia</li>
                                <li>Vivo</li>
                            </ul>
                        </li>
                        <li className={style.dropdown_sub}>
                            Theo loại
                            <ul>
                                <li>Điện thoại</li>
                                <li>Máy tính bảng</li>
                                <li>Laptop</li>
                                <li>Phụ kiện</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <button className='bg-primary p-2 text-white rounded col-span-1'>
                    Thêm sản phẩm
                </button>
            </div>

            {/* All products */}
            <div className='grow flex flex-wrap gap-8 my-6'>
                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>

                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>

                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>

                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>

                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>

                <div className={style.product}>
                    <PlaceholderImage w={'100%'} h={'180px'} />
                    <h4>Samsung Galaxy A04</h4>
                    <p className='text-sm'>ID: ...</p>
                    <div className='flex justify-between items-center'>
                        <p>Giá: 2.500.000</p>
                        <a className='bg-gray-300 p-1 rounded-sm'>
                            <Edit />
                        </a>
                    </div>
                </div>


            </div>

            {/* Pages */}
            <div className='flex justify-center'>
                <button className='rounded-tl rounded-bl border border-gray-600 p-1'>Prev</button>
                {[1, 2, 3].map((page: number) =>
                    <button 
                        onClick={() => setactivePage(page)} 
                        key={page} 
                        className={activePage !== page ? style.page_btn : style.page_btn__active}
                    >
                        {page}
                    </button>
                )}
                <button className='rounded-tr rounded-br border border-gray-600 p-1'>Next</button>
            </div>
        </div>
    )
}

export default Products