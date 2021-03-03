import React from 'react';
import PropTypes from 'prop-types';

function Cart(props) {
	const { quantity = 0, handleCartOpen = Function.prototype } = props;
	return (
		<div
			className='cart purple lighten-2 white-text'
			onClick={handleCartOpen}>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart-quantity'>{quantity}</span> : null}
		</div>
	);
}

export { Cart };

Cart.propTypes = {
	quantity: PropTypes.number.isRequired,
	handleCartOpen: PropTypes.func.isRequired,
};
