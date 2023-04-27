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

	const listImg = [
		'https://cdn2.cellphones.com.vn/1800x600,webp,q100/https://dashboard.cellphones.com.vn/storage/a34-sliding-new-th4.png',
		'https://cdn2.cellphones.com.vn/1800x600,webp,q100/https://dashboard.cellphones.com.vn/storage/note-12-mo-ban-003-sliding-new-004444.png',
		'https://cdn2.cellphones.com.vn/1800x600,webp,q100/https://dashboard.cellphones.com.vn/storage/iphone-14-pro-sliding-new-trogia2tr.jpg',
		'https://cdn2.cellphones.com.vn/1800x600,webp,q100/https://dashboard.cellphones.com.vn/storage/oppo-sliding-new-moban.png'
	]

	return (
		<div>
			<div className='w-full h-[400px] bg-gray-200 overflow-hidden'>
				<Carousel>
					{
						listImg.map((img: string, index: number) =>
							<img src={img} alt='' key={index}/>
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