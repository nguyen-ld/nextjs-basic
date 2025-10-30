import { StaticImageData } from "next/image";

type TDetails = {
	weight: string;
	highlights: string[];
};

export interface IProduct {
	id: number;
	images: StaticImageData;
	category: string;
	name: string;
	price_sales: number;
	price: number;
	details: TDetails;
}
