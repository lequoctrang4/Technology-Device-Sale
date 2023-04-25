import React from 'react'
import Link from 'next/link';
import { StarFill } from 'react-bootstrap-icons';

import style from './style.module.scss'
import eProduct from '@/model/eProduct';
import { formatPrice, originalPrice } from '@/utils/price';
import FiveStar from '../Utilities/FiveStar';

const DefaultCard = ({ item }: { item: eProduct }) => {
    let url = item?.image?.replaceAll(" ", "");
    if (!url) url = 'https://gamek.mediacdn.vn/133514250583805952/2022/4/21/photo-1-16505168269091273389824.jpg';
    return (
        <div className={style['cart-default']}>
            <Link href={`/product?id=${item.id}`}>
                <img alt="" src={url} className='w-full' />
                <h4 className='text-center mt-3 hover:underline min-h-[56px]'>{item.name}</h4>
            </Link>
            <div className='my-3'>
                <div className='flex gap-1 my-2'>
                    <div className='grow text-center'>
                        <p className='font-semibold'>
                            {formatPrice(item.price)}
                        </p>
                        <p className={style['origin-price']}>
                            {originalPrice(item.price, item.salePercent)}
                        </p>
                    </div>
                    {
                        item.salePercent !== "0" &&
                        <span className='btn-danger self-center'>
                            -{item.salePercent}%
                        </span>
                    }

                </div>
            </div>
            <FiveStar n={5} />
        </div>
    )
}

export default DefaultCard;