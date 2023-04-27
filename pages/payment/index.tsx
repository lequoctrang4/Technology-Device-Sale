import style from './style.module.scss'
import { useGContext } from '@/components/GlobalContext';
import Item from './item';
import { formatPrice } from '@/utils/price';
import { useMemo } from 'react';
import { getCookie } from 'typescript-cookie';
import { addOrder } from '../api/productApi';
import { setNotification } from '@/components/Authentication/signIn';
import { defaultCart } from '@/model/eCart';
import { useRouter } from 'next/router';

export default function Cart() {
    const { push } = useRouter();
    const { cart, setCart } = useGContext();
    const calculate = useMemo(() => {
        return cart.detail.reduce((a: number, b) => {
            return parseInt(b.product.price) * b.quantity + a;
        }, 0)
    }, [cart]);
    const handlePayment = () => {
        const newOrder = {
            "sessionId": 123,
            "token": 111,
            "status": "notDone",
            "tax": 0,
            "subTotal": calculate,
            "voucherId": 0,
            "shippingId": 100,
            "note": "",
            products: cart.detail.map(item => ({
                "productID": parseInt(item.product.id),
                "discount": parseInt(item.product.salePercent),
                "quantity": item.quantity,
                "price": parseInt(item.product.price)
            }))
        }

        const myToken = getCookie('user');
        addOrder(myToken, newOrder).then(resp => {
            if (resp) {
                setNotification('success', 'Bạn đã đặt hàng thành công!', '');
                setCart(defaultCart);
                push('/profile');
            }
        }).catch(err => console.error(err));
    }

    return (
        <div className='main'>
            <div className="w-full h-full py-8 overflow-hidden">
                <div className="px-5 pb-5">
                    <h3>Thanh toán</h3>
                </div>
                <div className="md:grid grid-cols-3 gap-4 md:px-5">
                    <div className="col-span-2 flex flex-col gap-3 grow">
                        <div className="flex flex-row max-w-[100%] gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="w-1/2 flex flex-row gap-3 items-center">
                                Sản phẩm (2 sản phẩm)
                            </div>
                            <div className="w-1/2 flex flex-row gap-3">
                                <div className="w-1/3 text-sm font-medium text-center text-gray-900">
                                    Đơn giá
                                </div>
                                <div className=" w-1/3 text-sm font-medium text-center text-gray-900">
                                    Số lượng
                                </div>
                                <div className="w-1/3 text-sm font-medium text-center text-gray-900">
                                    Thành tiền
                                </div>
                                {/* <Trash size={24} /> */}
                            </div>
                        </div>
                        {
                            cart.detail.map((c, i) =>
                                <Item index={i} key={i} />
                            )
                        }
                    </div>
                    <div className="mt-4 md:mt-0 col-span-1 flex flex-col gap-3 grow">
                        <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="flex font-semibold justify-between">
                                <p>Địa chỉ giao hàng</p>
                            </div>
                            <div>
                                Phan Hải Hà | 0339337907
                            </div>
                            <div>
                                Khu A KTX ĐHQG-HCM, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Tp. Hồ Chí Minh
                            </div>
                        </div>
                        <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="flex font-semibold justify-between mb-3">
                                <p>Chọn hình thức thanh toán</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <input type="radio" name="paymentmethod" value="COD" defaultChecked={true} />
                                    <label className="ml-2">Thanh toán khi nhận hàng</label>
                                </div>
                                <div>
                                    <input type="radio" name="paymentmethod" value="Momo" disabled/>
                                    <label className="ml-2">Ví Momo</label>
                                </div>
                                <div>
                                    <input type="radio" name="paymentmethod" value="ATM" disabled/>
                                    <label className="ml-2">Thẻ ATM nội địa</label>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="flex justify-between">
                                <p>Mã giảm giá</p>
                            </div>
                            <div className="flex gap-1 md:gap-2 lg:gap-4">
                                <input type="text" className="grow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent" placeholder="Nhập mã giảm giá" />
                                <button className="btn-danger">
                                    Áp dụng
                                </button>
                            </div>
                        </div> */}
                        <div className="p-1 md:p-4 rounded-lg border border-gray-300">
                            <table className={style['order-table']}>
                                <tbody>
                                    <tr>
                                        <td>Tổng tiền hàng</td>
                                        <td>
                                            {formatPrice(calculate)}đ
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Phí vận chuyển</td>
                                        <td>24.000</td>
                                    </tr>
                                    <tr>
                                        <td>Tổng hóa đơn</td>
                                        <td className="font-semibold text-red-500">
                                            {formatPrice(calculate + 24000)}đ
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn-danger w-full' onClick={handlePayment}>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

