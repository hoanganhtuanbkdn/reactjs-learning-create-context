import { useShopContext } from '../context/ShopContext';
const products = [
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
function List() {
	const { addProductToCart } = useShopContext();

	return (
		<div className="container mx-auto py-10">
			<div className="card">
				<div className="text-center mb-6">
					<h2 className="text-3xl">Best selling fashion items</h2>
					<h4 className="mt-4">
						Base optimal relaxation unlock my. Asserts too invite
						web cause eow can breakout ocean create.
					</h4>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
					{products.map((item, index) => (
						<div
							className="group relative overflow-hidden"
							key={index}
							onClick={addProductToCart}
						>
							<img
								src={item.image}
								alt={item.name}
								className="w-full"
							/>
							<img
								src={item.imageHover}
								alt={item.name}
								className="absolute left-0 top-0 z-20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-200 ease-linear"
							/>
							<div className="absolute z-30 delay-150 -bottom-20 left-0 right-0 flex items-center justify-center group-hover:bottom-10 transition-all duration-200 ease-linear">
								<button className="hover:bg-[#DF4141] border py-[10px] px-5 text-sm hover:text-white bg-white transition-all duration-200">
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default List;
