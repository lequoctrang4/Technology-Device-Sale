import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderAdmin from '@/components/Header/Admin'
import Sidebar from '@/components/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<HeaderAdmin />
			<div className='grid grid-cols-5'>
				<Sidebar />
				<Component {...pageProps} />
			</div>
		</>
	)

}
