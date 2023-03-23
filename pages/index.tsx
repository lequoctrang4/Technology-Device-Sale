import styles from '@/styles/home.module.scss'
import AdminSite from './admin'

export default function Home() {
	return (
		<div className={styles.home}>
			<AdminSite />
		</div>
	)
}
