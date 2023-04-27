import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import React, { useState } from 'react';
import style from './style.module.scss';
import { addProduct } from '@/pages/api/productApi';
import { getCookie } from 'typescript-cookie';

const Add = () => {
    const bread = [
        { name: 'Quản lý sản phẩm', path: '/admin/Product' },
        { name: 'Thêm sản phẩm mới' },
    ];
    const [rows, setRows] = useState([{}]);
    const [formValue, setFormValue] = useState({
        name: '',
        color: '',
        salePercent: '',
        price: '',
        manufacturer: '',
        category: '',
        html: '',
        image: '',
    });

    const handleAddRow = () => {
        const item = {
            group_name: '',
            name: '',
            value: '',
        };
        setRows([...rows, item]);
    };

    const handleRemoveRow = () => {
        setRows([...rows.slice(0, -1)]);
    };

    const handleChangeRow = (e: any, index: number) => {
        const { name, value } = e.target;
        const thisRows = rows;
        thisRows[index] = {
            [name]: value,
        };
        setRows(thisRows);
    };

    const handleChangeForm = (e: any) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const token = getCookie('user');
        addProduct(token, formValue).then(() => {
            alert('success!');
            setFormValue({
                name: '',
                color: '',
                salePercent: '',
                price: '',
                manufacturer: '',
                category: '',
                html: '',
                image: '',
            });
        });
    };

    return (
        <div className="main py-6">
            <Breadcrumb links={bread} />
            <div className="flex justify-between my-4">
                <h3>Thêm sản phẩm mới</h3>
                {/* <div className="flex gap-4 my-4">
                    <button
                        onClick={handleAddRow}
                        className="bg-primary text-white p-1 rounded"
                    >
                        Thêm thuộc tính
                    </button>
                    <button
                        onClick={handleRemoveRow}
                        className="bg-primary text-white p-1 rounded"
                    >
                        Xóa thuộc tính
                    </button>
                </div> */}
            </div>
            <form onSubmit={handleSubmit} className={style.product_edit}>
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1 flex flex-col gap-4">
                        <div>
                            <label>Tên sản phẩm</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg p-4"
                                name="name"
                                value={formValue.name}
                                onChange={handleChangeForm}
                            />
                        </div>
                        <div>
                            <label>Phân loại</label>
                            <select
                                className="border border-gray-300 rounded-lg p-4"
                                name="category"
                                onChange={handleChangeForm}
                            >
                                <option>Điện thoại</option>
                                <option>Máy tính bảng</option>
                                <option>Đồng hồ</option>
                                <option>Laptop</option>
                            </select>
                        </div>
                        <div>
                            <label>Hãng</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg p-4"
                                name="manufacturer"
                                onChange={handleChangeForm}
                                value={formValue.manufacturer}
                            />
                        </div>
                        <div>
                            <label>Màu sắc</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg p-4"
                                name="color"
                                onChange={handleChangeForm}
                                value={formValue.color}
                            />
                        </div>
                        <div>
                            <label>Giá niêm yết</label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded-lg p-4"
                                name="price"
                                onChange={handleChangeForm}
                                value={formValue.price}
                            />
                        </div>
                        <div>
                            <label>Tỉ lệ giảm giá (%)</label>
                            <input
                                type="number"
                                className="border border-gray-300 rounded-lg p-4"
                                name="salePercent"
                                onChange={handleChangeForm}
                                value={formValue.salePercent}
                            />
                        </div>
                    </div>
                    <div className="col-span-1">
                        {/* <table className="mt-6 w-full">
                            <tbody>
                                {rows.map((item, index) => {
                                    return (
                                        <tr>
                                            <td className="px-2">
                                                <select
                                                    className="border border-gray-300 rounded-lg p-4"
                                                    onChange={(e) =>
                                                        handleChangeRow(
                                                            e,
                                                            index
                                                        )
                                                    }
                                                >
                                                    <option hidden>
                                                        Chọn nhóm thuộc tính
                                                    </option>
                                                    <option>
                                                        Nhóm thuộc tính 1
                                                    </option>
                                                    <option>
                                                        Nhóm thuộc tính 2
                                                    </option>
                                                    <option>
                                                        Nhóm thuộc tính 3
                                                    </option>
                                                </select>
                                            </td>
                                            <td className="px-2">
                                                <select
                                                    className="border border-gray-300 rounded-lg p-4"
                                                    onChange={(e) =>
                                                        handleChangeRow(
                                                            e,
                                                            index
                                                        )
                                                    }
                                                >
                                                    <option hidden>
                                                        Chọn thuộc tính
                                                    </option>
                                                    <option>
                                                        Thuộc tính 1
                                                    </option>
                                                    <option>
                                                        Thuộc tính 2
                                                    </option>
                                                    <option>
                                                        Thuộc tính 3
                                                    </option>
                                                </select>
                                            </td>
                                            <td className="px-2">
                                                <input
                                                    type="text"
                                                    className="border border-gray-300 rounded-lg p-4"
                                                    onChange={(e) =>
                                                        handleChangeRow(
                                                            e,
                                                            index
                                                        )
                                                    }
                                                ></input>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table> */}
                        <div>
                            <label>Link sản phẩm</label>
                            <input
                                type="text"
                                name="image"
                                onChange={handleChangeForm}
                                value={formValue.image}
                            />
                        </div>
                        <div>
                            <label>Mô tả</label>
                            <textarea
                                name="html"
                                onChange={handleChangeForm}
                                value={formValue.html}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-8">
                    <Link
                        href={'/admin/Product'}
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
    );
};

export default Add;
