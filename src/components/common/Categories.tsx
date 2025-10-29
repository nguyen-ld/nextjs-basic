import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface IProps {
	images: StaticImageData;
	name_categories: string;
	styles: React.CSSProperties;
}

function Categories({ images, name_categories, styles }: IProps) {
	return (
		<div
			className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center"
			style={styles}
		>
			<Image
				src={images}
				alt="categories_images"
				className="group-hover:scale-108 transition max-w-28"
			/>
			<p className="text-sm font-medium">{name_categories}</p>
		</div>
	);
}

export default Categories;
