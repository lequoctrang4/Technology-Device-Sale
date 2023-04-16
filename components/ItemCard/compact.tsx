import React from 'react'
import style from './style.module.scss'
import { StarFill } from 'react-bootstrap-icons';
import Link from 'next/link';

const CompactCart = () => {
    const url = 'https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-ava-600x600.jpg';

    return (
        <div className={style['cart-default']}>
            <Link href={'/product/sting-hong-sam'}>
                <img alt="" src={url} className='w-full' />
                <p className='text-sm md:text-base mt-3 hover:underline'>Tai nghe Airpods 2</p>
            </Link>
            <div className='my-4 text-sm'>
                <p>
                    <span className='font-semibold'>3.190.000 VND</span>
                    <span className='ml-2 text-xs'> -12%</span>
                </p>
                <p className={style['origin-price']}>
                    4.390.000 VND
                </p>
            </div>
            <div className='flex justify-center gap-1'>
                <StarFill color="gold" size={12} />
                <StarFill color="gold" size={12} />
                <StarFill color="gold" size={12} />
                <StarFill color="gold" size={12} />
                <StarFill color="gold" size={12} />
            </div>
        </div>
    )
}

export default CompactCart;