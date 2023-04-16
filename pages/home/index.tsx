import React, { useEffect, useState } from 'react'
import Outstanding from './outstanding'
import Carousel from '@/components/Carousel'

const HomePage = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		fetch('https://picsum.photos/v2/list?page=2&limit=5')
			.then(resp => resp.json())
			.then(data => setImages(data))
	}, [])

	const handleImg = (link:string) => {
		const last = link.slice(-4);

		return 
	}

	return (
		<div>
			<div className='w-full h-[400px] bg-gray-200'>
				<Carousel>
					{
						images.map((img: any) =>
							<img src={img.download_url} alt={img.id} key={img.id}/>
						)
					}
				</Carousel>
			</div>
			<Outstanding />
		</div>
	)
}

export default React.memo(HomePage)