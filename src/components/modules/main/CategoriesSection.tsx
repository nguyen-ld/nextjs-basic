import Image from "next/image";
import Categories from "../../common/Categories";
import { CATEGORY } from "@/src/helpers/mock/category";
import { colors } from "@/src/helpers/mock/color";

function CategorisSections() {
	return (
		<div className="mt-16">
			<p className="text-2xl md:text-3xl font-medium">Categories</p>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
				{CATEGORY.map((item, index) => {
					return (
						<Categories
							key={item.id}
							name_categories={item.name}
							images={item.images}
							styles={{
								backgroundColor: colors[index % colors.length],
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default CategorisSections;
