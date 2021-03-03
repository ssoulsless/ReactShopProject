import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [alertName, setAlertName] = useState('');

	const handleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};

	const addToCart = (item) => {
		const itemIndex = order.findIndex(
			(orderItem) => orderItem.mainId === item.mainId
		);
		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
			setOrder(newOrder);
		}
		setAlertName(item.displayName);
	};

	const incrementQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (itemId === el.mainId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder);
	};

	const decrementQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			const newQuantity = el.quantity - 1;
			if (itemId === el.mainId) {
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder.filter((item) => item.quantity !== 0));
	};

	useEffect(() => {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				data.shop && setGoods(data.shop);
				setLoading(false);
			});
	}, []);

	const removeFromCart = (itemId) => {
		const newOrder = order.filter((el) => itemId !== el.mainId);
		setOrder(newOrder);
	};

	const closeAlert = () => {
		setAlertName('');
	};

	return (
		<main className='content container'>
			<Cart quantity={order.length} handleCartOpen={handleCartOpen} />
			{loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} addToCart={addToCart} />
			)}
			{isCartOpen && (
				<CartList
					order={order}
					handleCartOpen={handleCartOpen}
					removeFromCart={removeFromCart}
					decrementQuantity={decrementQuantity}
					incrementQuantity={incrementQuantity}
				/>
			)}
			{alertName && <Alert name={alertName} closeAlert={closeAlert} />}
		</main>
	);
}

export { Shop };
