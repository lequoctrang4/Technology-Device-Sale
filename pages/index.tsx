import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { getCookie } from 'typescript-cookie';

import HomePage from './home';
import { getAllProduct } from './api/productApi'
import { useGContext } from '@/components/GlobalContext';

export default function Home() {
	const { push, pathname } = useRouter();
	const { setAllProducts } = useGContext();

	useEffect(() => {
		getAllProduct().then(data => setAllProducts(data));
	}, [])

	return <HomePage />
}
