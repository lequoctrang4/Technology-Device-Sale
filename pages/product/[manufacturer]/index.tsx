import Breadcrumb from '@/components/Breadcrumb';
import DefaultCard from '@/components/ItemCard/default';
import eLink from '@/model/eLink';
import eProduct from '@/model/eProduct';
import { getProductsByManufacturer } from '@/pages/api/productApi';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProductByManufacturer = () => {
    const route = useRouter();
    const { manufacturer } = route.query;
    const [list, setList] = useState<eProduct[]>([]);
    const bread: eLink[] = [
        { name: 'Trang chủ', path: '/' },
        { name: 'Thương hiệu ' + manufacturer }
    ]

    useEffect(() => {
        getProductsByManufacturer(manufacturer).then(data => setList(data))
    }, [manufacturer])

    return (
        <div className='main py-8'>
            <Breadcrumb links={bread} />
            <div className='product_list'>
                {
                    list.length > 0 && list.map(product => <DefaultCard item={product} />)
                }
                {
                    list.length === 0 && <p>Some thing went wrong...</p>
                }
            </div>
        </div>
    )
}

export default ProductByManufacturer