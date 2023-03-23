import HeaderAdmin from '@/components/Header/Admin'
import Product from './Product'
import React from 'react'
import Sidebar from '@/components/Sidebar'

const AdminSite = () => {
    return (
        <>
            <HeaderAdmin />
            <div className='grid grid-cols-5'>
                <Sidebar />
                <Product />
            </div>
        </>
    )
}

export default AdminSite