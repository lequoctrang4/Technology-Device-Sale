import { useRouter } from "next/router";
import Link from "next/link";

const Detail = () => {
    const router = useRouter();
    const { username } = router.query;
    return (
        <div className="col-span-4 p-8 flex flex-col">
            <h3 className="font-normal mb-3">Thông tin khách hàng phanhaiha14</h3>
            <div className="flex mt-6">
                <div className="w-full max-w-[25%] mt-5" id="avatar">
                    <div className="flex justify-center">
                        <img
                            src="https://play-lh.googleusercontent.com/XVHP0sBKrRJYZq_dB1RalwSmx5TcYYRRfYMFO18jgNAnxHAIA1osxM55XHYTb3LpkV8"
                            className="w-48 rounded-full"
                            alt="Avatar" />
                    </div>
                    {/* <div className="flex justify-center mt-4">
                        <label className="w-28 flex flex-col items-center px-1 py-2 bg-green-500 text-white rounded-lg tracking-wide cursor-pointer hover:bg-green-700">
                            <span className="text-center font-bold">Chọn ảnh</span>
                            <input type='file' className="hidden" />
                        </label>
                    </div> */}
                </div>
                <form className="w-full max-w-[75%] ml-5">
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Họ và tên đệm
                            </label>
                            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                readOnly
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Tên
                            </label>
                            <input readOnly className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-last-name" type="text" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Tên người dùng
                            </label>
                            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-username" type="text" readOnly />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Mã số CCCD
                            </label>
                            <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-cccd" type="number" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-tel">
                                Số điện thoại
                            </label>
                            <input readOnly className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-tel" type="number" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Email
                            </label>
                            <input readOnly className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-birthday">
                                Ngày sinh
                            </label>
                            <input readOnly className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-birthday" type="date" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                Giới tính
                            </label>
                            {/* <div className="relative">
                                <select className="block appearance w-full bg-white-200 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300" id="grid-gender">
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div > */}
                            <input readOnly className="appearance-none block w-full bg-white-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-gender" type="text" value="Nữ"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <Link href='/admin/customer/phanhaiha14/address_list'>
                            <span className="mb-2 px-3 underline text-blue-500">Danh sách địa chỉ</span >
                        </Link>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        <Link href='/admin/customer/phanhaiha14/order_history'>
                            <span className="mb-2 px-3 underline text-blue-500">Danh sách đơn hàng</span >
                        </Link>
                    </div>
                    {/* <div className="flex flex-wrap mt-6 gap-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Lưu
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Hủy bỏ
                        </button>
                    </div> */}
                </form>
            </div >
        </div>
    )
}

export default Detail;