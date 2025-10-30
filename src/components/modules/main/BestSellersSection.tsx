import { BEST_SELLERS } from "@/src/helpers/mock/best_sellers";
import ProductItem from "../../common/ProductItem";

function BestSellersSections() {
	return (
		<div className="mt-16">
			<p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
				{BEST_SELLERS.map((item) => {
					return (
						<ProductItem
							id={item.id}
							key={item.id}
							images={item.images}
							price={item.price}
							price_sales={item.price_sales}
							name_category={item.category}
							name={item.name}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default BestSellersSections;
