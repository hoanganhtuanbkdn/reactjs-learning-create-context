import React from 'react';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './pages/Detail';
import { ShopProvider } from './context/ShopContext';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/detail/:id',
		element: <Detail />,
	},
]);

const App = () => {
	return (
		<ShopProvider>
			<RouterProvider router={router} />
		</ShopProvider>
	);
};

export default App;
