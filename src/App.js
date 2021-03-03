import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Shop } from './components/Shop';
import React from 'react';

function App() {
	return (
		<div className='App'>
			<Header />
			<Shop />
			<Footer />
		</div>
	);
}

export default App;
