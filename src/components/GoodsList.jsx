/* eslint-disable react/prop-types */
import React from 'react';
import { GoodsItem } from './GoodsItem';
import { ShopContext } from '../context';
import { useContext } from 'react';

function GoodsList() {
	const { goods=[] } = useContext(ShopContext);

	if (!goods.length) {
		return <h3>Nothing There</h3>;
	}
	return (
		<div className='goods'>
			{goods.map((item) => (
				<GoodsItem key={item.mainId} {...item} />
			))}
		</div>
	);
}

export { GoodsList };
