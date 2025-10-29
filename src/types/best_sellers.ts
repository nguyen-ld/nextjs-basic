import { StaticImageData } from "next/image";

export interface IBestSellers {
	id: number;
	images: StaticImageData;
	category: string;
	name: string;
	price_sales: number;
	price: number;
}
