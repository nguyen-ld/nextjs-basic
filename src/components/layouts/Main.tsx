import Banner from "../modules/main/Banner";
import BestSellersSections from "../modules/main/BestSellersSection";
import CategorisSections from "../modules/main/CategoriesSection";

function Main() {
	return (
		<div className="px-6 md:px-16 lg:px-24 xl:px-32">
			<Banner />
			<CategorisSections />
			<BestSellersSections />
		</div>
	);
}

export default Main;
