import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import HeaderAdmin from '@/components/Header/Admin'
import eUser, { defaultUser } from '@/model/eUser'
import GlobalContext from '@/components/GlobalContext'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<eUser>(defaultUser);
	const { push, pathname } = useRouter();
	useEffect(() => {
		const currentUser = getCookie('user');
		if (currentUser) {
			setUser({ ...user, role: parseInt(currentUser) })

			if (pathname.includes('/admin')) {
				currentUser === '2' ? push('/admin/product') : push('/')
			}
		}
	}, [])

	return (
		<GlobalContext>
			{
				user.role === 2 ? (
					<>
						{/* user is admin */}
						<HeaderAdmin />
						<div className='grid grid-cols-5'>
							<Sidebar />
							<Component {...pageProps} />
						</div>
					</>) : (
					<>
						{/* user is customer or not logged in */}
						<Header />
						<Component {...pageProps} />
						<Footer />
					</>
				)
			}

		</GlobalContext>
	)
}
