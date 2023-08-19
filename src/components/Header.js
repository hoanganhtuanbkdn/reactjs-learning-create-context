import React from 'react';
import { useShopContext } from '../context/ShopContext';

export default function Header() {
	const { carts } = useShopContext();

	return (
		<div className=" h-[75px] border border-[rgba(204, 199, 199, 0.35)]">
			<div className="container mx-auto flex flex-row justify-between items-center h-full">
				<div className="">
					<img
						src="/images/logo.webp"
						alt=""
						className="w-[175px] h-[45px]"
					/>
				</div>
				<div className="flex flex-row gap-5">
					<div>Home</div>
					<div>Product</div>
					<div>Contact</div>
				</div>
				<div className="relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-shopping-bag"
					>
						<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<path d="M16 10a4 4 0 0 1-8 0"></path>
					</svg>
					<p className="absolute top-[-10px] right-[-10px] text-xs font-bold">
						{carts.length}
					</p>
				</div>
			</div>
		</div>
	);
}
