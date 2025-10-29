import Image from "next/image";

import banner_main from "../../../assets/images/main_banner.png";
import { Button } from "../../ui/button";
import Link from "next/link";

function Banner() {
	return (
		<div className="mt-10">
			<div className="relative">
				<Image src={banner_main} alt="banner_main_home" />
				<div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15">
						Freshness You Can Trust, Savings You will Love!
					</h1>
					<div className="mt-6">
						<Button className="bg-[#4fbf8b] py-6 px-10 font-bold cursor-pointer rounded-sm hover:bg-[#4fbf8b]">
							<Link href="#" className="font-medium text-base">
								Shop now
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
