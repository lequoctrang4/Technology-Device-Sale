import Image from "next/image";

export default function Cart() {

    const product_img = 'https://cdn.tgdd.vn/Products/Images/42/279065/xiaomi-12t-bac-glr-1.jpg';

    return (
        <div className="w-full h-full p-[20px] overflow-hidden">
            <div className="px-5 pb-5">
                <h3>Giỏ hàng</h3>
            </div>
            <div className="grid grid-cols-3 gap-4 px-5">
                <div className="col-span-2 flex flex-col gap-3 grow">
                    <div className="flex flex-row max-w-[100%] gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="w-1/2 flex flex-row gap-3 items-center">
                            <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">Chọn tất cả (2 sản phẩm)</label>
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
                                <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="flex flex-row">
                                    <img src={product_img} alt="product" width={100} height={100} />
                                    <div className="inline-block align-middle">
                                        <p>Điện thoại Samsung Galaxy Ultra S23</p>
                                        <span className="text-gray-400">Phân loại: Xám</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-row gap-3">
                            <div className="w-1/3 text-sm font-medium text-center justify-center text-gray-900 dark:text-gray-300">
                                12.000.000đ
                            </div>
                            <div className=" w-1/3 text-sm font-medium text-center text-gray-900 dark:text-gray-300">
                                <div className="my-3 flex rounded-md justify-center">
                                    <button type="button" className="mr-1 relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        -
                                    </button>
                                    <div className="relative flex items-stretch focus-within:z-10">
                                        <input type="text" x-model="quantity" name="quantity" id="quantity" className="text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none sm:text-sm border-gray-300" value="0" />
                                    </div>
                                    <button type="button" className="ml-1 relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                                        +
                                    </button>
                                </div>
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
                <div className="col-span-1">
                    <div className="flex flex-col max-w-[100%] gap-10 p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between">
                            <p>Tổng thanh toán</p>
                            <p className="text-red-500 font-bold">24.000.000đ</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

