import Link from 'next/link'
import React from 'react'

const Address = () => {
    return (
        <div className='col-span-4 flex flex-col gap-4 p-8'>
            <div>
                <h3>Địa chỉ</h3>
            </div>
            <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <div className='flex flex-row justify-between'>
                    <p>
                        Phan Hải Hà <span className="text-gray-400">| (+84)0339337907</span>
                    </p>
                    <Link href='' className='text-blue-500 hover:underline'>
                        Chỉnh sửa
                    </Link>
                </div>
                <div>
                    <p>
                        Khu A KTX ĐHQG-HCM
                    </p>
                    <p>
                        Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <div className='flex flex-row justify-between'>
                    <p>
                        Phan Hải Hà <span className="text-gray-400">| (+84)0339337907</span>
                    </p>
                    <Link href='' className='text-blue-500 hover:underline'>
                        Chỉnh sửa
                    </Link>
                </div>
                <div>
                    <p>
                        Khu A KTX ĐHQG-HCM
                    </p>
                    <p>
                        Phường Linh Trung, Thành phố Thủ Đức, TP. Hồ Chí Minh
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Address