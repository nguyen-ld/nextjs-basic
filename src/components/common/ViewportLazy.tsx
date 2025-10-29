"use client";

import React, { useEffect, useRef, useState } from "react";

interface ViewportLazyProps {
	children: React.ReactNode;
	rootMargin?: string;
	threshold?: number | number[];
	once?: boolean;
	placeholder?: React.ReactNode;
}

function ViewportLazy({
	children,
	rootMargin = "200px 0px",
	threshold = 0,
	once = true,
	placeholder,
}: ViewportLazyProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		if (!("IntersectionObserver" in window)) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						if (once) observer.disconnect();
					} else if (!once) {
						setIsVisible(false);
					}
				});
			},
			{ root: null, rootMargin, threshold }
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [rootMargin, threshold, once]);

	return <div ref={ref}>{isVisible ? children : placeholder ?? null}</div>;
}

export default ViewportLazy;
