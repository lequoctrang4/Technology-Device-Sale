import { useGContext } from '@/components/GlobalContext'
import React, { useState } from 'react'
import { DashCircle, PlusCircle, Trash } from 'react-bootstrap-icons'

interface props {
    index: number
}

const Item = ({ index }: props) => {
    const { cart } = useGContext();
    console.log(cart);
    const product_img = 'https://cdn.tgdd.vn/Products/Images/42/279065/xiaomi-12t-bac-glr-1.jpg';
    const [number, setNumber] = useState(0);
    const changeNumber = (n = 0, action = '') => {
        switch (action) {
            case 'add':
                setNumber(number + n)
                break;

            case 'sub':
                setNumber(number - n > 0 ? number - n : 1);
                break;

            case 'clear':
                // at this step, add an alert
                setNumber(0);
                break;

            default:
                setNumber(n > 0 ? n : 1);
                break;
        }
    };

    return (
        <div className="flex flex-row p-2 lg:p-4 bg-white border border-gray-200 rounded-lg">
            <div className="w-1/2 flex flex-row text-sm font-medium text-gray-900 dark:text-gray-300">
                <div className="flex flex-row items-center">
                    <input type="checkbox" value="" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2" />
                    <label className="flex items-center">
                        <img src={product_img} alt="product" width={100} height={100} />
                        <div className="inline-block align-middle px-2">
                            <p>Điện thoại Samsung Galaxy Ultra S23</p>
                            <span className="text-gray-400">Phân loại: Xám</span>
                        </div>
                    </label>
                </div>
            </div>
            <div className="w-1/2 flex items-center text-sm">
                <div className="w-1/3 px-1 font-medium text-center justify-center text-gray-900 dark:text-gray-300">
                    12.000.000đ
                </div>
                <div className="w-1/3 px-1 font-medium text-center text-gray-900 dark:text-gray-300">
                    <div className="my-3 flex gap-1 items-center justify-center">
                        <button onClick={() => changeNumber(1, 'sub')}>
                            <DashCircle size={24} className="text-indigo-400" />
                        </button>
                        <input
                            type="number"
                            className="text-center border border-gray-100 rounded p-1 w-[32px] md:w-[40px] lg:w-[48px]"
                            value={number}
                            onChange={(e) => changeNumber(parseInt(e.target.value))}
                        />
                        <button onClick={() => changeNumber(1, 'add')}>
                            <PlusCircle size={24} className="text-indigo-400" />
                        </button>
                    </div>
                </div>
                <div className="w-1/3 px-1 font-medium text-center">
                    {12000000 * number}
                </div>
                <button onClick={() => changeNumber(0, 'clear')}>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    )
}

export default React.memo(Item)