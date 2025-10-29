import { ICategories } from "@/src/types/category";

import organic_veggies from "../../assets/images/organic_vegitable.png";
import fresh_fruits from "../../assets/images/fresh_fruits.png";
import cold_drinks from "../../assets/images/bottles_image.png";
import instant_food from "../../assets/images/maggi_image.png";
import dairy_products from "../../assets/images/dairy_product_image.png";
import bakery_breads from "../../assets/images/bakery_image.png";
import granis_cereals from "../../assets/images/grain_image.png";

export const CATEGORY: ICategories[] = [
	{
		id: 1,
		name: "Organic veggies",
		images: organic_veggies,
	},
	{
		id: 2,
		name: "Fresh Fruits",
		images: fresh_fruits,
	},
	{
		id: 3,
		name: "Cold Drinks",
		images: cold_drinks,
	},
	{
		id: 4,
		name: "Instant Food",
		images: instant_food,
	},
	{
		id: 5,
		name: "Dairy Products",
		images: dairy_products,
	},
	{
		id: 6,
		name: "Bakery&Breads",
		images: bakery_breads,
	},
	{
		id: 7,
		name: "Grains&Cereals",
		images: granis_cereals,
	},
];
