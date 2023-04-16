import React, { useEffect, useState } from 'react'
import Outstanding from './outstanding'
import Carousel from '@/components/Carousel'
import Brands from './brands'
// import { signIn } from '../api/userApi'

const HomePage = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		fetch('https://picsum.photos/v2/list?page=3&limit=5')
			.then(resp => resp.json())
			.then(data => setImages(data))
	}, [])

	return (
		<div>
			<div className='w-full h-[400px] bg-gray-200 overflow-hidden'>
				<Carousel>
					{
						images.map((img: any) =>
							<img src={img.download_url} alt={img.id} key={img.id}/>
						)
					}
				</Carousel>
			</div>
			<div className='main'>
				<Outstanding />
				<Brands />
			</div>
		</div>
	)
}

export default React.memo(HomePage)