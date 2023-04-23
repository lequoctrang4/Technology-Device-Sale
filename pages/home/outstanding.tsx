import { useGContext } from '@/components/GlobalContext'
import DefaultCart from '@/components/ItemCard/default'
import eProduct from '@/model/eProduct';
import React, { useEffect } from 'react'

const Outstanding = () => {
	const { allProducts } = useGContext();

	return (
		<div className='my-8'>
			<h2>Sản phẩm nổi bật</h2>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-8'>
				{
					allProducts.map((item: eProduct) => 
						<DefaultCart key={item.id} item = {item}/>
					)
				}
			</div>
		</div>
	)
}

export default React.memo(Outstanding);