import Image from "next/image";

export default function Cart() {

    const product_img = 'https://cdn.tgdd.vn/Products/Images/42/279065/xiaomi-12t-bac-glr-1.jpg';

    return (
        <div className="w-full h-full p-[20px] overflow-hidden">
            <div className="px-5 pb-5">
                <h3>Thanh toán</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 px-5">
                <div className="col-span-2 flex flex-col gap-3 grow">
                    <div className="flex flex-row max-w-[100%] gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="w-1/2 flex flex-row gap-3 items-center">
                            Sản phẩm (2 sản phẩm)
                        </div>
                        <div className="w-1/2 flex flex-row gap-3">
                            <div className="w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                Đơn giá
                            </div>
                            <div className=" w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                Số lượng
                            </div>
                            <div className="w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                Thành tiền
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="w-1/2 flex flex-row text-sm font-medium text-gray-900 dark:text-gray-300">
                            <div className="flex flex-row gap-3 items-center">
                                <img src={product_img} alt="product" width={100} height={100} />
                                <div className="inline-block align-middle">
                                    <p>Điện thoại Samsung Galaxy Ultra S23</p>
                                    <span className="text-gray-400">Phân loại: Xám</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-row gap-3">
                            <div className="w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                <div className="inline-block align-middle">
                                    12.000.000đ
                                </div>
                            </div>
                            <div className=" w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                2
                            </div>
                            <div className="w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                24.000.000đ
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                </svg>
                            </div>
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
                        <div className="inline-flex gap-4">
                            <input type="text" className="grow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent" placeholder="Nhập mã giảm giá" />
                            <button className="grow bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Áp dụng
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col max-w-[100%] gap-2 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between">
                            <p>Tổng tiền hàng</p>
                            <p>24.000.000đ</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Phí vận chuyển</p>
                            <p>24.000đ</p>
                        </div><div className="flex justify-between">
                            <p>Tổng voucher giảm giá</p>
                            <p>1.000.000đ</p>
                        </div><div className="flex justify-between">
                            <p>Tổng thanh toán</p>
                            <p className="text-red-500 font-bold">23.024.000đ</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="grow bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

