export function reducer(state, { type, payload }) {
	switch (type) {
	case 'SET_GOODS':
		return {
			...state,
			goods: payload || [],
			loading: false,
		};
	case 'ADD_TO_CART': {
		const itemIndex = state.order.findIndex(
			(orderItem) => orderItem.mainId === payload.mainId
		);
		let newOrder = null;
		if (itemIndex < 0) {
			const newItem = {
				...payload,
				quantity: 1,
			};
			newOrder = [...state.order, newItem];
		} else {
			newOrder = state.order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});
		}
		return {
			...state,
			order: newOrder,
			alertName: payload.displayName,
		};
	}

	case 'HANDLE_CART_OPEN':
		return {
			...state,
			isCartOpen: !state.isCartOpen,
		};

	case 'INCREMENT_QUANTITY': {
		return {
			...state,
			order: state.order.map((el) => {
				if (payload.id === el.mainId) {
					const newQuantity = el.quantity + 1;
					return {
						...el,
						quantity: newQuantity,
					};
				} else {
					return el;
				}
			}),
		};
	}

	case 'DECREMENT_QUANTITY': {
		return {
			...state,
			order: state.order
				.map((el) => {
					if (payload.id === el.mainId) {
						const newQuantity = el.quantity - 1;
						return {
							...el,
							quantity: newQuantity,
						};
					} else {
						return el;
					}
				})
				.filter((item) => item.quantity !== 0),
		};
	}

	case 'CLOSE_ALERT':
		return {
			...state,
			alertName: '',
		};

	case 'REMOVE_FROM_CART':
		return {
			...state,
			order: state.order.filter((el) => payload.id !== el.mainId),
		};
	default:
		return state;
	}
}
