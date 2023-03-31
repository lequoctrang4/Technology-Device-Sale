import React, { useState } from 'react'
import style from './style.module.scss'

const Pagination = ({ callback }: { callback: Function }) => {
    const [activePage, setActivePage] = useState(1);
    const transfer = (action: string, page?: number) => {
        if (action === 'prev') {
            callback((prev: number) => prev > 1 ? prev - 1 : 0);
            setActivePage((prev: number) => prev > 1 ? prev - 1 : 1);
        }
        else if (action === 'next') {
            callback((prev: number) => prev + 1);
            setActivePage(prev => prev + 1);
        }
        else if (page) {
            callback(page - 1);
            setActivePage(page);
        }
    }

    return (
        <div className='flex justify-center' >
            <button
                onClick={() => transfer('prev')}
                className='rounded-tl rounded-bl border border-gray-900 p-1'
            >
                Prev
            </button>
            {
                [1, 2, 3].map((page: number) =>
                    <button
                        onClick={() => transfer('', page)}
                        key={page}
                        className={activePage !== page ? style.page_btn : style.page_btn__active}
                    >
                        {page}
                    </button>
                )
            }
            <button
                onClick={() => transfer('next')}
                className='rounded-tr rounded-br border border-gray-900 p-1'
            >
                Next
            </button>
        </div>
    )
}

export default React.memo(Pagination)