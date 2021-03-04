/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import { ShopContext } from '../context';
import { useContext } from 'react';

function Alert() {

	const { closeAlert, alertName } = useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			clearTimeout(timerId);
		};
	}, [name]);

	return (
		<div id='toast-container'>
			<div className='toast'>{alertName} added to cart</div>
		</div>
	);
}

export { Alert };
