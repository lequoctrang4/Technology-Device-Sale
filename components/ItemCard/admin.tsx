import eProduct from '@/model/eProduct'
import Link from 'next/link'
import React from 'react'
import { PencilSquare } from 'react-bootstrap-icons'

const AdminCard = ({ product }: { product: eProduct }) => {
    return (
        <div className='flex gap-2 p-3 border border-gray-300 my-2 rounded-sm'>
            <img alt='' src={product.image ?? ""} className='w-[90px]' />
            <div className='grow'>
                <p className='text-xs text-gray-300'>#{product.id}</p>
                <p className='font-semibold'>{product.name}</p>
                <p>{product.price}</p>
            </div>
            <div>
                <Link href={'/admin/Product/' + product.id} className='btn-info-outline py-2 hover:underline'>
                    Chỉnh sửa
                    <PencilSquare className='inline ml-2'/>
                </Link>
                <button className='btn-danger-outline block w-full mt-3'>
                    Xóa
                </button>
            </div>
        </div>
    )
}

export default AdminCard