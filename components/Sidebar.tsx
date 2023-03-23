import React from 'react'
import { Home } from 'react-feather'

const Sidebar = () => {
    const categories = [
        {
            name: 'Trang chủ',
            icon: <Home />
        }
    ]
    return (
        <div className='py-8 px-4 col-span-1 bg-red-100'>
            <h3>Hello Admin</h3>
            <ul>
                {categories.map(cate =>
                    <ul>{cate.name} {cate.icon}</ul>
                )}
            </ul>
        </div>
    )
}

export default Sidebar