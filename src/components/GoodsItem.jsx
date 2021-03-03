/* eslint-disable react/prop-types */
import React from 'react';

function GoodsItem(props) {
	const {
		displayAssets,
		displayDescription,
		displayName,
		mainId,
		price,
		addToCart = Function.prototype,
	} = props;
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
