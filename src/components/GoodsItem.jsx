/* eslint-disable react/prop-types */
import React from 'react';
import { ShopContext } from '../context';
import { useContext } from 'react';

function GoodsItem(props) {
	const {
		displayAssets,
		displayDescription,
		displayName,
		mainId,
		price,
	} = props;

	const { addToCart } = useContext(ShopContext);

	return (
		<div className='card'>
			<div className='card-image'>
				<img
					src={displayAssets[0].url}
					alt={displayName}
					style={{
						background: `url(${displayAssets[0].background})`,
						backgroundSize: 'cover',
					}}
				/>
				<span className='card-title'>{displayName}</span>
			</div>
			<div className='card-content'>
				<p>{displayDescription}</p>
			</div>
			<div className='card-action'>
				<button
					className='btn deep-purple accent-3'
					onClick={() =>
						addToCart({
							mainId,
							displayName,
							price,
						})
					}>
					Buy
				</button>
				<span className='right'>{price.regularPrice} $</span>
			</div>
		</div>
	);
}

export { GoodsItem };
