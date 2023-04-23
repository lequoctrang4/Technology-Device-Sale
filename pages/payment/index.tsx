import { Trash } from 'react-bootstrap-icons';
import style from './style.module.scss'

export default function Cart() {
    const product_img = 'https://cdn.tgdd.vn/Products/Images/42/279065/xiaomi-12t-bac-glr-1.jpg';

    return (
        <div className="w-full h-full p-[20px] overflow-hidden">
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
                            <Trash size={24} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 bg-white border border-gray-200 rounded-lg text-sm">
                        <div className="w-1/2 flex flex-row font-medium text-gray-900">
                            <div className="flex flex-row gap-3 items-center">
                                <img src={product_img} alt="product" width={100} />
                                <div className="inline-block align-middle">
                                    <p>Điện thoại Samsung Galaxy Ultra S23</p>
                                    <span className="text-gray-400">Xám, 128GB</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center gap-3">
                            <div className="w-1/3 font-medium text-center text-gray-900">
                                12.000.000đ
                            </div>
                            <div className="w-1/3 font-medium text-center text-gray-900">
                                2
                            </div>
                            <div className="w-1/3 font-medium text-center text-gray-900">
                                24.000.000đ
                            </div>
                            <Trash size={24} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-3 grow">
                    <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between">
                            <p>Địa chỉ giao hàng</p>
                            <a href="" className="underline text-blue-500">Thay đổi</a>
                        </div>
                        <div>
                            Phan Hải Hà | 0339337907
                        </div>
                        <div>
                            Khu A KTX ĐHQG-HCM, khu phố 6, phường Linh Trung, thành phố Thủ Đức, Tp. Hồ Chí Minh
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between mb-3">
                            <p>Chọn hình thức thanh toán</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <input type="radio" name="paymentmethod" value="COD" />
                                <label className="ml-2">Thanh toán khi nhận hàng</label>
                            </div>
                            <div>
                                <input type="radio" name="paymentmethod" value="Momo" />
                                <label className="ml-2">Ví Momo</label>
                            </div>
                            <div>
                                <input type="radio" name="paymentmethod" value="ATM" />
                                <label className="ml-2">Thẻ ATM nội địa</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between">
                            <p>Mã giảm giá</p>
                        </div>
                        <div className="flex gap-1 md:gap-2 lg:gap-4">
                            <input type="text" className="grow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent" placeholder="Nhập mã giảm giá" />
                            <button className="btn-danger">
                                Áp dụng
                            </button>
                        </div>
                    </div>
                    <div className="p-1 md:p-4 rounded-lg border border-gray-300">
                        <table className={style['order-table']}>
                            <tbody>
                                <tr>
                                    <td>Tổng tiền hàng</td>
                                    <td>24.000.000</td>
                                </tr>
                                <tr>
                                    <td>Phí vận chuyển</td>
                                    <td>24.000</td>
                                </tr>
                                <tr>
                                    <td>Tổng voucher giảm giá</td>
                                    <td>24.000</td>
                                </tr>
                                <tr>
                                    <td>Tổng hóa đơn</td>
                                    <td className="font-semibold text-red-500">24.000.000</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn-danger w-full'>Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

