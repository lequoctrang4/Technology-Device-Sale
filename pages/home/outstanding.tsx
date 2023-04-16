import DefaultCart from '@/components/ItemCard/default'
import React from 'react'

const Outstanding = () => {
	return (
		<div className='my-8'>
			<h2>Sản phẩm nổi bật</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-8'>
				{
					Array(12).fill(0).map((_, i) => {
						return <DefaultCart key={i} />
					})
				}
			</div>
		</div>
	)
}

export default Outstanding