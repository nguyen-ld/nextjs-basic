import { IProduct } from "@/src/types/product";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface IProps {
	products: IProduct;
}

function ProductDetailItem({ products }: IProps) {
	console.log(products);
	return (
		<div>
			<div className=" flex flex-col md:flex-row gap-16 mt-4">
				<div className="flex gap-3">
					<div className="flex flex-col gap-3">
						<div className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer">
							<Image src={products.images} alt="images-small" />
						</div>
					</div>
					<div className="border border-gray-500/30 max-w-90 rounded overflow-hidden">
						<Image src={products.images} alt="images-large	" />
					</div>
				</div>
				<div className="text-sm w-full md:w-1/2">
					<h1 className="text-3xl font-medium">Brown Bread 400g</h1>
					<div className="flex gap-1 items-center mt-2">
						{[...Array(5)].map((_, index) => (
							<Star
								key={index}
								className="w-4 h-4"
								color={index < 4 ? "#4FBF8B" : "#C2E9D7"}
								fill={index < 4 ? "#4FBF8B" : "#C2E9D7"}
							/>
						))}
						<p className="text-gray-400">(4)</p>
					</div>
					<div className="mt-6">
						<p className="text-gray-500/70 line-through">
							MRP: $40
						</p>
						<p className="text-2xl font-medium">MRP: $35</p>
					</div>
					<p className="text-base font-medium mt-6">About Product</p>
					<ul className="list-disc ml-4 text-gray-500/70">
						{products.details.highlights.map((item, index) => (
							<li key={index} className="py-1 font-medium">
								{item}
							</li>
						))}
					</ul>
					<div className="flex items-center mt-10 gap-4 text-base">
						<Button className="w-1/2  py-6 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
							Add to Cart
						</Button>
						<Button className="w-1/2  py-6 cursor-pointer font-medium bg-[#4FBF8B] text-white hover:bg-primary-dull transition">
							Buy now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetailItem;
