import Link from "next/link";
import { Trash } from "react-bootstrap-icons";
import { useGContext } from "@/components/GlobalContext";
import Item from "./item";
import { useMemo, useState } from "react";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";
import InfoModal from "@/components/Modal/Info";
import { setNotification } from "@/components/Authentication/signIn";

export default function Cart() {
    const { cart, user } = useGContext();
    const { push } = useRouter();
    const [payment, setPayment] = useState(0);
    const [modal, setModal] = useState(false);
    const calculate = useMemo(() => {
        return cart.detail.reduce((a: number, b) => {
            return parseInt(b.product.price) * b.quantity + a;
        }, 0)
    }, [cart]);

    const toPayment = () => {
        if (user.id)
            push('/payment');
        else setNotification('warning', 'Bạn chưa đăng nhập', 'Vui lòng đăng nhập để sử dụng tính năng này!')
    }

    return (
        <div className="main">
            <div className="py-8 overflow-hidden">
                <div className="pb-5">
                    <h3>Giỏ hàng</h3>
                </div>
                <div className="lg:grid md:grid-cols-4 lg:grid-cols-3 gap-4">
                    <div className="col-span-2 lg:grid-cols-3 flex flex-col gap-2">
                        <div className="flex flex-row max-w-[100%] p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="w-1/2 flex flex-row gap-3 items-center">
                                {/* <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                                <p className="text-sm font-medium">
                                    Giỏ hàng có {cart.quantity} sản phẩm
                                </p>
                            </div>
                            <div className="w-1/2 flex flex-row gap-3">
                                <div className="w-1/3 text-sm font-medium text-center">
                                    Đơn giá
                                </div>
                                <div className=" w-1/3 text-sm font-medium text-center">
                                    Số lượng
                                </div>
                                <div className="w-1/3 text-sm font-medium text-center">
                                    Thành tiền
                                </div>
                                <Trash />
                            </div>
                        </div>
                        {
                            cart.quantity === 0 && <div className="text-center my-4">
                                <h4>Giỏ hàng của bạn đang trống.</h4>
                                <Link href='/' className="text-blue-400 underline">
                                    Click vào đây để về trang chủ
                                </Link>
                            </div>
                        }
                        {
                            cart.quantity > 0 && cart.detail.map((c, i) =>
                                <Item index={i} key={i} setPayment={setPayment} payment={payment} />
                            )
                        }
                    </div>
                    <div className="col-auto mt-4 lg:mt-0">
                        <div className="flex flex-col max-w-[100%] gap-10 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="flex justify-between">
                                <p>Tổng thanh toán</p>
                                <p className="text-red-500 font-bold">{formatPrice(calculate)}đ</p>
                            </div>
                            <button className="btn-danger text-center" onClick={toPayment}>
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

