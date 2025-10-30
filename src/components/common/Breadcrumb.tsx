import Link from "next/link";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import React from "react";

interface crumb {
	href: string;
	Label: string;
}

interface IProps {
	items: crumb[];
}

export function BreadcrumbWithCustomSeparator({ items }: IProps) {
	return (
		<Breadcrumb className="mt-5">
			<BreadcrumbList>
				{items.map((item, index) => {
					const isLastItem = index === items.length - 1;
					return (
						<React.Fragment key={index}>
							<BreadcrumbItem>
								{isLastItem ? (
									<BreadcrumbPage>
										{item.Label}
									</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link href={item.href}>
											{item.Label}
										</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
							{!isLastItem && <BreadcrumbSeparator />}
						</React.Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
