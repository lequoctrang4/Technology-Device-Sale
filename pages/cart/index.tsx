import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Trash } from "react-bootstrap-icons";
import Item from "./item";
import { useGContext } from "@/components/GlobalContext";

export default function Cart() {
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
                                <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label className="text-sm font-medium">Chọn tất cả (2 sản phẩm)</label>
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
                        <Item index={0} />
                        <Item index={1} />
                    </div>
                    <div className="col-auto mt-4 lg:mt-0">
                        <div className="flex flex-col max-w-[100%] gap-10 p-4 bg-white border border-gray-200 rounded-lg">
                            <div className="flex justify-between">
                                <p>Tổng thanh toán</p>
                                <p className="text-red-500 font-bold">24.000.000đ</p>
                            </div>
                            <Link className="btn-danger text-center" href={'/payment'}>
                                Thanh toán
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

