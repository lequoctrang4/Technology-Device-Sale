// import { GlobalCtx } from '@/components/GlobalContext'
import { useRouter } from 'next/router';
import { getCookie } from 'typescript-cookie';

import { useContext, useEffect } from 'react'
import HomePage from './home';

export default function Home() {
	const { push, pathname } = useRouter();
	useEffect(() => {
		const currentUser = getCookie('user');
		if (currentUser && currentUser === '2')
			push('/admin/product/')
	}, [])

	return <HomePage />
}
