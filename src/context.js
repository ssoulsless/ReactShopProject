/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import React from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isCartOpen: false,
	alertName: '',
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

	value.closeAlert = () => {
		dispatch({ type: 'CLOSE_ALERT' });
	};

	value.removeFromCart = (itemId) => {
		dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
	};

	value.decrementQuantity = (itemId) => {
		dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
	};

	value.incrementQuantity = (itemId) => {
		dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
	};

	value.addToCart = (item) => {
		dispatch({ type: 'ADD_TO_CART', payload: item });
	};

	value.handleCartOpen = () => {
		dispatch({ type: 'HANDLE_CART_OPEN' });
	};

	value.setGoods = (data) => {
		dispatch({ type: 'SET_GOODS', payload: data });
	};

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
