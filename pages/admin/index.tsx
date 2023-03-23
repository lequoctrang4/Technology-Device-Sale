import HeaderAdmin from '@/components/Header/Admin'
import Sidebar from '@/components/Sidebar'
import Product from './Product'

import React, { useState } from 'react'

const AdminSite = () => {
    const [option, setOption] = useState(0);
    return (
        <>
            <HeaderAdmin />
            <div className='grid grid-cols-5'>
                <Sidebar callback={setOption} />
                { option === 0 && <Product /> }
            </div>
        </>
    )
}

export default AdminSite