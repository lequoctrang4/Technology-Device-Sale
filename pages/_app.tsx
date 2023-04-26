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
	return (
		<GlobalContext>
			{
				<>
					<Header />
						<div className='ltw_app'>
							<Sidebar />
							<Component {...pageProps} />
						</div>
					<Footer />
				</>
			}
		</GlobalContext>
	)
}
