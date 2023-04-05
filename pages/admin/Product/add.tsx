import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import React, { useState } from 'react';
import style from './style.module.scss';

const Add = () => {
    const bread = [
        { name: 'Quản lý sản phẩm', path: '/admin/product' },
        { name: 'Thêm sản phẩm mới' },
    ];
    const [field, setField] = useState<Boolean>(false);

    return (
        <div className='flex flex-col col-span-4 p-8'>
            <Breadcrumb links={bread} />
            <div className="flex justify-between my-4">
                <h3>Thêm sản phẩm mới</h3>
                <button
                    onClick={() => setField((prev) => !prev)}
                    className="bg-primary text-white p-1 rounded"
                >
                    Thêm thuộc tính
                </button>
            </div>
            <form onSubmit={() => false} className={style.product_edit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label>ID</label>
                        <input type="text" />
                    </div>
                    <div className="col-span-1">
                        <label>Giá hiện tại</label>
                        <input type="text" readOnly disabled />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label>Tải ảnh lên</label>
                        <input
                            type="file"
                            className="w-full border border-gray-300"
                        />
                    </div>
                    <div className="w-1/2 grid grid-cols-2 gap-4">
                        <div className="col-auto">
                            <label>Nhà phát triển</label>
                            <select>
                                <option>Samsung</option>
                                <option>Oppo</option>
                                <option>Apple</option>
                                <option>Sony</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <label>Danh mục</label>
                            <select>
                                <option>Điện thoại</option>
                                <option>Laptop</option>
                                <option>Tablet</option>
                                <option>Phụ kiện</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <label>Hệ điều hành</label>
                            <select>
                                <option>Android</option>
                                <option>iOS</option>
                            </select>
                        </div>
                        <div className="col-auto">
                            <label>Phiên bản</label>
                            <input type="text" />
                        </div>
                        <div className="col-auto">
                            <label>Giá gốc</label>
                            <input type="number" />
                        </div>
                        <div className="col-auto">
                            <label>Khuyến mãi</label>
                            <input type="number" />
                        </div>
                    </div>
                </div>
                {field && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 grid grid-cols-2 gap-2">
                            <select className="col">
                                <option value="" hidden selected>
                                    Chọn loại
                                </option>
                                <option value="num">Số</option>
                                <option value="text">Chữ</option>
                            </select>
                            <input
                                type="text"
                                placeholder="key"
                                className="col"
                            />
                        </div>
                        <div className="col-span-1">
                            <input type="text" placeholder="Value" />
                        </div>
                    </div>
                )}
                <div>
                    <label>Mô tả</label>
                    <textarea />
                </div>
                <div className="flex justify-end gap-8">
                    <Link
                        href={'/admin/product'}
                        className="btn-danger hover:underline"
                    >
                        Hủy thay đổi
                    </Link>
                    <button className="btn-success hover:underline">
                        Lưu thay đổi
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add