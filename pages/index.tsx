import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { getCookie } from 'typescript-cookie';

import HomePage from './home';
import { getAllProduct } from './api/productApi'
import { useGContext } from '@/components/GlobalContext';
import eProduct from '@/model/eProduct';

export default function Home() {
	const { push, pathname } = useRouter();
	const { setAllProducts } = useGContext();
	const myItem = {
		id: 'macbook-air-m2-22',
		name: 'Laptop Apple MacBook Air M2 2022 8GB/256GB/8-core GPU',
		price: '25990000',
		salePercent: '21',
		color: 'Bạc',
		html: '',
		image: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-01-1.jpg',
		manufacturer: 'Apple'
	} as eProduct;

	useEffect(() => {
		getAllProduct().then(data => setAllProducts(data));
		// const fakeData = Array(12).fill(myItem).map((_, i) => {
		// 	return { ..._, id: `${_.id}_${i}` }
		// })
		// setAllProducts(fakeData);
	}, [])

	return <HomePage />
}
