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
        <div>
            <h2>Hello Admin</h2>
            <ul>
                {categories.map(cate =>
                    <ul>{cate.name} {cate.icon}</ul>
                )}
            </ul>
        </div>
    )
}

export default Sidebar