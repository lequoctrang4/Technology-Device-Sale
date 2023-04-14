import React, { useEffect, useState } from 'react'
import Outstanding from './outstanding'
import Carousel from '@/components/Carousel'
import { signIn } from '../api/userApi'

const HomePage = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		signIn({ mobile: '0399609015', password: 'Lequoctrang' })
			.then(res => console.log(res))
	}, [])

	return (
		<div>
			<div className='w-full h-[400px] bg-gray-200'>
				<Carousel>
					{
						images.map((img: any) =>
							<img src={img.download_url} alt={img.id} key={img.id} />
						)
					}
				</Carousel>
			</div>
			<Outstanding />
		</div>
	)
}

export default React.memo(HomePage)