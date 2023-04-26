import Pagination from '@/components/Pagination'
import style from './style.module.scss'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Search } from 'react-bootstrap-icons'
import AdminCard from '@/components/ItemCard/admin';
import { getAllCategory, getAllProduct } from '@/pages/api/productApi';
import eProduct from '@/model/eProduct';
import eCate from '@/model/eCate';
import { useDirect } from '@/components/GlobalContext';

const Products = () => {
    const router = useRouter();
    const [amount, setAmount] = useState(0);
    const [allProducts, setAllProducts] = useState<eProduct[]>([]);
    const [categories, setCategories] = useState<eCate[]>([]);

    useDirect();
    useEffect(() => {
        getAllProduct().then(data => setAllProducts(data));
        getAllCategory().then(data => setCategories(data));
    }, [])

    return (
        <div className='main my-6'>
            <h3 className='font-normal'>Quản lý sản phẩm</h3>
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
                                {
                                    categories.map(cate =>
                                        <li key={cate.id}>{cate.title}</li>
                                    )
                                }
                            </ul>
                        </li>
                    </ul>
                </div>

                <Link
                    href={'/admin/product/add'}
                    className='bg-primary p-2 text-white rounded col-span-1'
                >
                    Thêm sản phẩm
                </Link>
            </div>

            {/* All products */}
            <div className='my-6'>
                {
                    allProducts
                        .slice(amount * 5, (amount + 1) * 5)
                        .map((item, i: number) =>
                            <AdminCard product={item} key={i} />
                        )
                }
            </div>
            <Pagination callback={setAmount} />
        </div>
    )
}

export default Products