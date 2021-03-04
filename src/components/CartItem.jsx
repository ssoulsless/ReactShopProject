/* eslint-disable react/prop-types */
import React from 'react';
import { ShopContext } from '../context';
import { useContext } from 'react';

function CartItem(props) {
	const {
		mainId,
		displayName,
		price,
		quantity,
	} = props;
	const { removeFromCart, decrementQuantity, incrementQuantity } = useContext(
		ShopContext
	);	

	return (
		<div>
			<li className='collection-item'>
				{displayName}
				<i
					className='small material-icons cart-item--icons'
					onClick={() => decrementQuantity(mainId)}>
					remove
				</i>{' '}
				x{quantity}{' '}
				<i
					className='small material-icons cart-item--icons'
					onClick={() => incrementQuantity(mainId)}>
					add
				</i>{' '}
				= {price.regularPrice * quantity} $
				<span className='secondary-content'>
					<i
						className='material-icons cart-item--delete'
						onClick={() => removeFromCart(mainId)}>
						close
					</i>
				</span>
			</li>
		</div>
	);
}

export { CartItem };
