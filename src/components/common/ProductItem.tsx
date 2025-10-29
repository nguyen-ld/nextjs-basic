import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface Iprops {
	images: StaticImageData;
	name: string;
	name_category: string;
	price_sales: number;
	price: number;
}

function ProductItem(props: Iprops) {
	return (
		<div>
			<div className="border border-gray-500/20 rounded-sm md:px-4 px-3 py-2 ">
				<div className="group cursor-pointer flex items-center justify-center py-2">
					<Image
						src={props.images}
						alt="images_best_sellers"
						className="hover:scale-105 transition max-w-26 md:max-w-36"
					/>
				</div>

				<p>{props.name_category}</p>
				<p className="text-gray-700 font-medium text-lg truncate w-full">
					{props.name}
				</p>
				<div className="flex gap-1 items-center">
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
				<div className="flex justify-between items-center mt-3">
					<p className="md:text-xl text-base font-medium text-[#4fbf8b]">
						${props.price_sales}{" "}
						<span className="text-gray-500/60 md:text-sm text-xs line-through">
							${props.price}
						</span>
					</p>
					<div>
						<Button className="bg-[#EDF8F3] text-[#4fbf8b] font-normal  px-2 py-0 md:w-20 w-16 h-8.5 !border-[#4fbf8b] hover:bg-[#EDF8F3] ">
							<ShoppingCart className="w-3.5 text-[#4fbf8b] " />
							Add
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;
