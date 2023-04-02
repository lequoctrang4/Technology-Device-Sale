import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRight } from 'react-feather';
import React, { useState } from 'react';
import style from './style.module.scss';

const Detail = () => {
    const router = useRouter();
    const [field, setField] = useState<Boolean>(false);
    const id = router.query.id;
    const content =
        'Mollit aliquip qui nisi minim aliquip ut excepteur incididunt cupidatat quis ullamco nisi eiusmod.Aute ut reprehenderit deserunt enim sunt elit ad aute mollit est.Excepteur do fugiat Lorem veniam nostrud velit esse ut dolor sunt esse culpa consectetur.';
    return (
        <div className="col-span-4 p-8">
            <h3 className="font-normal flex items-center">
                <Link href={'/admin/product'} className="hover:underline">
                    Quản lý sản phẩm
                </Link>
                <ChevronRight />
                Samsung Galaxy A04
            </h3>
            <div className="flex justify-between my-4">
                <h3>Hiệu chỉnh</h3>
                <button
                    onClick={() => setField((prev) => !prev)}
                    className="bg-primary text-white p-1 rounded"
                >
                    Thêm thuộc tính
                </button>
            </div>
            <form onSubmit={() => false} className={style.product_edit}>
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
                {field && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1 grid grid-cols-2 gap-2">
                            <select className="col">
                                <option value="" hidden selected>Chọn loại</option>
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
                            <input type="text" placeholder='Value'/>
                        </div>
                    </div>
                )}
                <div>
                    <label>Mô tả</label>
                    <textarea value={content} />
                </div>
            </form>
        </div>
    );
};

export default Detail;
