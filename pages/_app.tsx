import { useEffect, useState } from 'react'
import { getCookie } from 'typescript-cookie'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeaderAdmin from '@/components/Header/Admin'
import eUser, { defaultUser } from '@/model/eUser'
import GlobalContext from '@/components/GlobalContext'
import { getProfile } from './api/userApi'

export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState<eUser>(defaultUser);
	const [token, setToken] = useState('');

	useEffect(() => {
		/* get token user from cookie, if it exist then set user is logged */
		const tk = getCookie('user');
		tk && setToken(tk);
	}, []);

	useEffect(() => {
		if (token) {
			getProfile(token).then(data => {
				const user: eUser = {
					...data[0],
					isAdmin: data[0].isAdmin === '1' ? true : false
				};
				setUser(user);
			})
		}
	}, [token])

	return (
		<GlobalContext>
			{
				user.isAdmin ? (
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
						<Header username={user.name}/>
						<Component {...pageProps} />
						<Footer />
					</>
				)
			}

		</GlobalContext>
	)
}
