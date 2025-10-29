import { PRODUCTS } from "@/src/helpers/mock/product";
import ProductItem from "../../common/ProductItem";

function ProductSection() {
	return (
		<div className="px-6 md:px-16 lg:px-24 xl:px-32">
			<div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
					{PRODUCTS.map((item) => {
						return (
							<ProductItem
								key={item.id}
								name={item.name}
								name_category={item.category}
								price={item.price}
								price_sales={item.price_sales}
								images={item.images}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductSection;
