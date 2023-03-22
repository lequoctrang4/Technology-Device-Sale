import Header from '@/components/Header'
import styles from '../styles/home.module.scss'

export default function Home() {
	return (
		<div className={styles.home}>
			<Header />
			<div className='ml-20'>
				<h1>
					Hello world!
				</h1>
			</div>
		</div>
	)
}
