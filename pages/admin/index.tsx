import HeaderAdmin from '@/components/Header/Admin'
import Sidebar from '@/components/Sidebar'
import Product from './Product'
import CustomerList from './Customer'
import Employee from './Employee'

import React, { useState } from 'react'

const AdminSite = () => {
    const [option, setOption] = useState(0);
    return (
        <>
            <HeaderAdmin />
            <div className='grid grid-cols-5'>
                <Sidebar callback={setOption} />
                { option === 0 && <Product /> }
                { option === 2 && <CustomerList />}
                { option === 3 && <Employee /> }
            </div>
        </>
    )
}

export default AdminSite