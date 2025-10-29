import Image from "next/image";
import Link from "next/link";

import { Input } from "../ui/input";

import logo from "../../assets/images/logo.svg";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

function Header() {
	return (
		<div className="px-6 py-4 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center border-b-1">
			<Image src={logo} alt="logo" />
			<div className="flex items-center gap-8">
				<Link href="/">Home</Link>
				<Link href="/products">All Product</Link>
				<div className="relative">
					<Input
						placeholder="Search products"
						className="!rounded-full"
					/>
					<div className="absolute inset-y-0 right-0 flex items-center pr-3">
						<Search className="text-gray-400 w-5 h-5" />
					</div>
				</div>
				<div className="relative w-fit ">
					<ShoppingCart className="w-6 h-6 text-gray-700" />
					<div
						className="
							absolute -top-1 -right-1
							bg-[#4fbf8b] text-white text-xs font-bold
							rounded-full
							w-4 h-4
							flex items-center justify-center"
					>
						0
					</div>
				</div>
				<Button className="bg-[#4fbf8b] !rounded-3xl px-6 hover:bg-[#4fbf8b]">
					Login
				</Button>
			</div>
		</div>
	);
}

export default Header;
