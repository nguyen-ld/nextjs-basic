import { PRODUCTS } from "@/src/helpers/mock/product";
import ProductDetailItem from "@/src/components/common/ProductDetailItem";
import { notFound } from "next/navigation";
import Footer from "@/src/components/layouts/Footer";
import Header from "@/src/components/layouts/Header";
import RelatedProductSection from "@/src/components/modules/product/RelatedProductSection";
import { BreadcrumbWithCustomSeparator } from "@/src/components/common/Breadcrumb";
import { ROUTER } from "@/src/setting/contants/route";

interface ProductDetailsProps {
	params: Promise<{ id: string }>;
}

const breadcrumbItems = [
	{ Label: "Home", href: ROUTER.HOME },
	{ Label: "Product", href: ROUTER.PRODUCTS },
];

export default async function ProductDetails({ params }: ProductDetailsProps) {
	const { id } = await params;

	console.log(">>> check id ", id);

	const product = PRODUCTS.find((x) => x.id === Number(id));

	console.log(">>> check products", product);

	if (!product) return notFound();

	return (
		<>
			<Header />
			<div className=" px-6 md:px-16 lg:px-24 xl:px-32">
				<BreadcrumbWithCustomSeparator items={breadcrumbItems} />
				<ProductDetailItem products={product} />
				<RelatedProductSection category={product.category} />
			</div>

			<Footer />
		</>
	);
}
