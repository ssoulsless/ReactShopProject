import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Shop } from './components/Shop';
import React from 'react';
import { ContextProvider } from './context';

function App() {
	return (
		<div className='App'>
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</div>
	);
}

export default App;
