import { useGContext } from '@/components/GlobalContext';
import { getOrderByUser } from '@/pages/api/productApi';
import React, { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie';
import style from './style.module.scss'
import eOrder from '@/model/eOrder';

const History = () => {
	const [orderList, setOrderList] = useState([]);
	const { user } = useGContext();

	useEffect(() => {
		const token = getCookie('user');
		getOrderByUser(token).then(resp => setOrderList(resp));
	}, []);

	return (
		<div className='p-8'>
			<h3>Lịch sử đặt hàng</h3>
			<div>
				{
					orderList.map((_: eOrder) =>
						<div className="mb-4 bg-secondary p-3 rounded">
							<div className="flex justify-between mb-4">
								<h4>Đơn hàng: #{_.orderId}</h4>
								<p>
									Trạng thái:{' '}
									<span className="italic">
										{_.status === "notDone" ? "Chưa hoàn thành" : "Đã hoàn thành"}
									</span>
								</p>
							</div>
							<div className="lg:flex justify-between ml-6">
								<table className={style.order_item}>
									<tbody>
										<tr>
											<th>Khách hàng</th>
											<td> {user.name} </td>
										</tr>
										<tr>
											<th>Email</th>
											<td> {user.email} </td>
										</tr>
										<tr>
											<th>Số điện thoại</th>
											<td> {user.mobile} </td>
										</tr>
										<tr>
											<th>Địa chỉ</th>
											<td>
												KTX khu A, Đông Hòa, Dĩ An, Bình Dương
											</td>
										</tr>
									</tbody>
								</table>
								<table className={style.order_detail + ' mt-6 lg:mt-0'}>
									<thead>
										<tr>
											<th>Tên sản phẩm</th>
											<th>Số lượng</th>
											<th>Giá tiền</th>
											<th>Tổng</th>
										</tr>
									</thead>
									<tbody className="text-center">
										{
											_.products.map(p => <tr>
												<td>{p.name}</td>
												<td>&times; {p.quantity}</td>
												<td>{p.price}</td>
												<td>{parseInt(p.price) * parseInt(p.quantity)}</td>
											</tr>)
										}
									</tbody>
								</table>
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default History