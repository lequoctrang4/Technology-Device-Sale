import { useGContext } from '@/components/GlobalContext'
import DefaultCard from '@/components/ItemCard/default'
import eProduct from '@/model/eProduct';
import React, { useEffect } from 'react'

const Outstanding = () => {
	const { allProducts } = useGContext();

	return (
		<div className='my-8'>
			<h2>Sản phẩm nổi bật</h2>
			<div className='product_list'>
				{
					allProducts.map((item: eProduct) =>
						<DefaultCard key={item.id} item={item} />
					)
				}
			</div>
		</div>
	)
}

export default React.memo(Outstanding);