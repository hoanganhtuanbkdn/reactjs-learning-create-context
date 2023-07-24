import React, { useState } from 'react';
import Home from './pages/Home';
import Create from './pages/Create';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Detail from './pages/Detail';
import Update from './pages/Update';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/create',
		element: <Create />,
	},
	{
		path: '/detail/:id',
		element: <Detail />,
	},
	{
		path: '/update/:id',
		element: <Update />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
