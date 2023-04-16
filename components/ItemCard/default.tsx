import React from 'react'
import style from './style.module.scss'
import { StarFill } from 'react-bootstrap-icons';
import Link from 'next/link';

const DefaultCart = () => {
    const url = 'https://cdn.tgdd.vn/Products/Images/42/279065/xiaomi-12t-bac-glr-1.jpg';

    return (
        <div className={style['cart-default']}>
            <Link href={'/product/sting-hong-sam'}>
                <img alt="" src={url} className='w-full' />
                <h4 className='text-center mt-3 hover:underline'>Xiaomi 12T</h4>
            </Link>
            <div className='my-3'>
                <div className='flex gap-1 my-2'>
                    <div className='grow text-center'>
                        <p className='font-semibold'>10.890.000 VND</p>
                        <p className={style['origin-price']}>
                            12.990.000 VND
                        </p>
                    </div>
                    <span className='btn-danger self-center'>
                        -12%
                    </span>
                </div>
            </div>
            <div className='flex justify-center gap-1'>
                <StarFill color="gold" />
                <StarFill color="gold" />
                <StarFill color="gold" />
                <StarFill color="gold" />
                <StarFill color="gold" />
            </div>
        </div>
    )
}

export default DefaultCart;