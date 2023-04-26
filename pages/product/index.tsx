import { useRouter } from 'next/router'
import React from 'react'
import ProductById from './id';
import ProductByCategory from './categoty';
import ProductByManufacturer from './manufacturer';

export default function Product() {
    const route = useRouter();
    const { id, category, manufacturer } = route.query;

    if (id && typeof id === 'string')
        return <ProductById />
    else if (category && typeof category === 'string')
        return <ProductByCategory />;
    else if (manufacturer && typeof manufacturer === 'string')
        return <ProductByManufacturer />
    return (
        <div className='main'>
            <h1>Something wrong...</h1>
        </div>
    )
}
