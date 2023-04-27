import { useRouter } from 'next/router'
import React from 'react'
import ProductById from './id';
import ProductByCategory from './categoty';
import ProductByManufacturer from './manufacturer';
import ProductBySearch from './search';

export default function Product() {
    const route = useRouter();
    const { id, category, manufacturer, search } = route.query;

    if (id && typeof id === 'string')
        return <ProductById />
    else if (category && typeof category === 'string')
        return <ProductByCategory />;
    else if (manufacturer && typeof manufacturer === 'string')
        return <ProductByManufacturer />
    else if (search && typeof search === 'string')
        return <ProductBySearch />
    return (
        <div className='main'>
            <h1>Something wrong...</h1>
        </div>
    )
}
