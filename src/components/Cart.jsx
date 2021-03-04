import React from 'react';
import { ShopContext } from '../context';
import { useContext } from 'react';

function Cart() {
	const { handleCartOpen, order } = useContext(ShopContext);

	let quantity = 0;

	if (order.length) {
		for (let i = 0; i < order.length; i++) {
			quantity += order[i].quantity;
		}
	}

	return (
		<div className='cart purple lighten-2 white-text' onClick={handleCartOpen}>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
}

export { Cart };
