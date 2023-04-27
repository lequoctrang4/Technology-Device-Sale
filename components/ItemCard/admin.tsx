import eProduct from '@/model/eProduct'
import { deleteProduct, getAllProduct } from '@/pages/api/productApi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { PencilSquare } from 'react-bootstrap-icons'
import { getCookie } from 'typescript-cookie'

const AdminCard = ({ product, callback }: { product: eProduct , callback: Function}) => {
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const token = getCookie('user');
        console.log(token);
        deleteProduct(token, product.id)
            .then(data => {
                if (data) {
                    alert('Xóa thành công');
                    getAllProduct().then(data => callback(data));
                }
                else alert('Xóa thất bại');
                console.log(data);
        })
    }

    return (
        <div className='flex gap-2 p-3 border border-gray-300 my-2 rounded-sm'>
            <img alt='' src={product.image ?? ""} className='w-[90px]' />
            <div className='grow'>
                <p className='text-xs text-gray-300'>#{product.id}</p>
                <p className='font-semibold'>{product.name}</p>
                <p>{product.price}</p>
            </div>
            <div>
                <Link href={'/admin/product/' + product.id} className='btn-info-outline py-2 hover:underline'>
                    Chỉnh sửa
                    <PencilSquare className='inline ml-2'/>
                </Link>
                <button onClick={(e) => handleSubmit(e)} className='btn-danger-outline block w-full mt-3'>
                    Xóa
                </button>
            </div>
        </div>
    )
}

export default AdminCard