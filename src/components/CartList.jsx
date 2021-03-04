/* eslint-disable react/prop-types */
import React from 'react';
import { CartItem } from './CartItem';
import { ShopContext } from '../context';
import { useContext } from 'react';

function CartList() {
	const {
		order,
		handleCartOpen,
	} = useContext(ShopContext);

	let totalPrice = order.reduce((sum, el) => {
		return (sum += el.price.regularPrice * el.quantity);
	}, 0);

	return (
		<ul className='collection cart-list'>
			<li className='collection-item active  deep-purple darken-1'>
				Shopping Cart
			</li>
			{order.length ? (
				order.map((item) => (
					<CartItem
						key={item.mainId}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>Shopping cart is empty</li>
			)}
			<button className='secondary-content btn  deep-purple darken-2'>
				Buy
			</button>
			<li className='collection-item active  deep-purple darken-1'>
				Total price: {totalPrice} $
			</li>
			<i className='material-icons cart-close' onClick={handleCartOpen}>
				close
			</i>
		</ul>
	);
}

export { CartList };
