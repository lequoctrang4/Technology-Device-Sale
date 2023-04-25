import { useRouter } from 'next/router'
import React from 'react'

const ProductByCategory = () => {
    const { query } = useRouter();
    const { category } = query;
    return (
        <div>
            <h1>{category}</h1>
        </div>
    )
}

export default ProductByCategory