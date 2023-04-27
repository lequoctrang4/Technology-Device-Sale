import Breadcrumb from '@/components/Breadcrumb';
import { useGContext } from '@/components/GlobalContext';
import DefaultCard from '@/components/ItemCard/default';
import eLink from '@/model/eLink';
import eProduct from '@/model/eProduct';
import { useRouter } from 'next/router';
import React from 'react'

const LookUp = () => {
    const route = useRouter();
    const {search} = route.query;
    const { productFilter } = useGContext();
    const result = productFilter(search);
    const bread: eLink[] = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Tìm kiếm' }
    ]
    return (
        <div className='main py-8'>
            <Breadcrumb links={bread} />
            <h2>Kết quả tìm kiếm</h2>
            <p className='text-gray-500 py-4'>Tìm thấy {result.length} kết quả</p>
            <div className='product_list'>
                {
                    result.map((item: eProduct) =>
                        <DefaultCard item={item} key={item.id} />
                    )
                }
            </div>
        </div>
    )
}

export default LookUp