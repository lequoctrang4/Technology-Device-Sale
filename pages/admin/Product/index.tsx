import Pagination from '@/components/Pagination'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Edit, Search } from 'react-feather'
import style from './style.module.scss'

const PlaceholderImage = ({ w, h }: { w: string, h?: string }) =>
    <div style={{ width: w, height: h, backgroundColor: '#ccc' }} />

const Products = () => {
    const router = useRouter();
    const [amount, setAmount] = useState<number>(0);
    return (
        <div className='flex flex-col col-span-4 p-8'>
            <h3 className='font-normal'>Quản lý sản phẩm</h3>

            {/* Filter */}
            <div className='grid grid-cols-6 gap-4 mt-4'>
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
            <div className='my-6'>
                {
                    Array.from(Array(10).keys()).map((i: number) =>
                        <div className={style.product} key={i}>
                            <PlaceholderImage w={'100%'} h={'150px'} />
                            <h4>Samsung Galaxy A04</h4>
                            <p className='text-sm'>ID: ...</p>
                            <div className='flex justify-between items-center'>
                                <p>Giá: 2.500.000</p>
                                <button
                                    className='bg-gray-300 p-1 rounded-sm'
                                    onClick={() => router.push(`/admin/product/${i}`)}
                                >
                                    <Edit />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* Pages */}
            <Pagination callback={setAmount}/>
        </div>
    )
}

export default Products