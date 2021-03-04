import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

import { API_KEY, API_URL } from '../config';

import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
	const { setGoods, order = [], loading, isCartOpen, alertName } = useContext(
		ShopContext
	);

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
			});
	}, []);

	return (
		<main className='content container'>
			<Cart quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}
			{isCartOpen && <CartList />}
			{alertName && <Alert />}
		</main>
	);
}

export { Shop };
