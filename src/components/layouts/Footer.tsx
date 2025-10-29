import Image from "next/image";

import logo from "../../assets/images/logo.svg";

const footers = [
	{
		id: 1,
		titles: "Quick Links",
		content: {
			tab1: "Home",
			tab2: "Best Sellers",
			tab3: "Offers & Deals",
			tab4: "Contact Us",
			tab5: "FAQs",
		},
	},
	{
		id: 2,
		titles: "Quick Links",
		content: {
			tab1: "Home",
			tab2: "Best Sellers",
			tab3: "Offers & Deals",
			tab4: "Contact Us",
			tab5: "FAQs",
		},
	},
	{
		id: 3,
		titles: "Quick Links",
		content: {
			tab1: "Home",
			tab2: "Best Sellers",
			tab3: "Offers & Deals",
			tab4: "Contact Us",
			tab5: "FAQs",
		},
	},
];

function Footer() {
	return (
		<div className="  px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-[#EDF8F3]   ">
			<div className="border-b-2 flex justify-between py-10">
				<div className="flex flex-col">
					<Image src={logo} alt="logo_footer" />
					<p className="max-w-[410px] mt-6">
						We deliver fresh groceries and snacks straight to your
						door. Trusted by thousands, we aim to make your shopping
						experience simple and affordable.
					</p>
				</div>
				<div className="flex flex-wrap justify-between w-3/8 space-y-5">
					{footers.map((items, index) => {
						return (
							<div key={index}>
								<h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
									{items.titles}
								</h2>
								<ul className="text-sm space-y-1">
									<li>
										<p className="hover:underline transition">
											{items.content.tab1}
										</p>
									</li>
									<li>
										<p className="hover:underline transition">
											{items.content.tab2}
										</p>
									</li>
									<li>
										<p className="hover:underline transition">
											{items.content.tab3}
										</p>
									</li>
									<li>
										<p className="hover:underline transition">
											{items.content.tab4}
										</p>
									</li>
									<li>
										<p className="hover:underline transition">
											{items.content.tab5}
										</p>
									</li>
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<p className="py-4 text-center text-sm md:text-base">
				Copyright 2025 © GreatStack.dev All Right Reserved.
			</p>
		</div>
	);
}

export default Footer;
