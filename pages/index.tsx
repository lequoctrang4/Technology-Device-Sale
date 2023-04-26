import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import HomePage from './home';
import { getAllCategory, getAllProduct } from './api/productApi'
import { useGContext } from '@/components/GlobalContext';
import eCate from '@/model/eCate';

/* const myItem = {
	id: 'macbook-air-m2-22',
	name: 'Laptop Apple MacBook Air M2 2022 8GB/256GB/8-core GPU',
	price: '25990000',
	salePercent: '21',
	color: 'Bạc',
	html: '',
	image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1.jpg',
	manufacturer: 'Apple'
} as eProduct; */

export default function Home() {
	const { setAllProducts, setCategories } = useGContext();
	const { user } = useGContext();
	const { push } = useRouter();
	useEffect(() => {
		/* get all products from database */
		getAllProduct().then(data => {
			setAllProducts(data)
		});

		/* get all categories from database */
		getAllCategory().then(data => {
			const res = data.map((d: eCate) => {
				switch (d.id) {
					case '1':
						d.content = 'mobile';
						break;

					case '2':
						d.content = 'laptop';
						break;

					case '3':
						d.content = 'tables';
						break;

					case '4':
						d.content = 'watch';
						break;
				}
				return d;
			})
			setCategories(res);
		})
	}, [])
	useEffect(() => {
		if (user.isAdmin === '1')
			push('/admin')
	}, [])

	return <HomePage />
}
