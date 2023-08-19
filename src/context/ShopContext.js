import React, { useContext, useState } from 'react';
const ShopContext = React.createContext([]);

const ProductData = [
	{
		id: 1,
		name: 'Purple women shirt',
		image: '/images/product-1.webp',
		imageHover: '/images/product-1-hover.webp',
	},
	{
		id: 2,
		name: 'Purple women shirt',
		image: '/images/product-2.webp',
		imageHover: '/images/product-2-hover.webp',
	},
	{
		id: 3,
		name: 'Purple women shirt',
		image: '/images/product-3.webp',
		imageHover: '/images/product-3-hover.webp',
	},
	{
		id: 4,
		name: 'Purple women shirt',
		image: '/images/product-4.webp',
		imageHover: '/images/product-4-hover.webp',
	},
];
const ShopProvider = ({ children }) => {
	const [carts, setCarts] = useState([]);

	const addProductToCart = (newProduct) => {
		setCarts([newProduct, ...carts]);
	};

	const removeProductToCart = (product) => {
		const newCarts = carts.filter((item) => item.id !== product.id);
		setCarts(newCarts);
	};
	return (
		<ShopContext.Provider
			value={{
				carts,
				addProductToCart,
				removeProductToCart,
				products: ProductData,
			}}
		>
			{children}
		</ShopContext.Provider>
	);
};

const useShopContext = () => {
	const shopContext = useContext(ShopContext);

	return shopContext;
};
export { ShopProvider, useShopContext };
