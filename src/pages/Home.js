import React from 'react';
import List from './List';
import List2 from './List2';
import './Home.css';
import { HomeProvider } from '../context/HomeContext';

const Home = () => {
	return (
		<HomeProvider>
			<div className="root">
				<List />
				<List2 />
			</div>
		</HomeProvider>
	);
};

export default Home;
