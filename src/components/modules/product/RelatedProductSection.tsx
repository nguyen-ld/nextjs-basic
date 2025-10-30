import { PRODUCTS } from "@/src/helpers/mock/product";
import ProductItem from "../../common/ProductItem";
import { Button } from "../../ui/button";
import Link from "next/link";

interface IProps {
	category: string;
}

function RelatedProductSection({ category }: IProps) {
	const ProductListByCategory = PRODUCTS.filter(
		(c) => c.category === category
	);

	console.log(">>> check list product by category ", ProductListByCategory);

	return (
		<div className="flex flex-col items-center mt-20">
			<div className="flex flex-col items-center w-max">
				<p className="text-3xl font-medium">Related Products</p>
				<div className="w-20 h-0.5 bg-[#4FBF8B] rounded-full mt-2"></div>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6 w-full">
				{ProductListByCategory.map((item) => {
					return (
						<ProductItem
							key={item.id}
							id={item.id}
							images={item.images}
							name={item.name}
							name_category={item.category}
							price={item.price}
							price_sales={item.price_sales}
						/>
					);
				})}
			</div>
			<Button className="mx-auto cursor-pointer px-12 my-16 py-6 border border-[#4FBF8B] rounded text-primary hover:bg-[#EDF8F3] transition bg-white">
				<Link href={"/products"} className="text-[#4FBF8B]">
					See more
				</Link>
			</Button>
		</div>
	);
}

export default RelatedProductSection;
