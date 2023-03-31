import HeaderAdmin from '@/components/Header/Admin'
import Sidebar from '@/components/Sidebar'
import Product from './product'
import CustomerList from './customer'
import Employee from './employee'
import Orders from './order'

import React from 'react'

const AdminSite = () => {
    return (
        <>
            <Product />
            <CustomerList />
            <Employee />
        </>
    )
}

export default AdminSite