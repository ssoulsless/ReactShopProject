/* eslint-disable react/prop-types */
import React from 'react';
import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
	const { goods = [], addToCart = Function.prototype } = props;

	if (!goods.length) {
		return <h3>Nothing There</h3>;
	}
	return (
		<div className='goods'>
			{goods.map((item) => (
				<GoodsItem key={item.mainId} {...item} addToCart={addToCart} />
			))}
		</div>
	);
}

export { GoodsList };
