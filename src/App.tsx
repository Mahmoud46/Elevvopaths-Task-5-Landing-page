import { useEffect, useState, type ReactNode } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Price from "./components/Price/Price";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import { applyTheme } from "./libs/utils";

export default function App(): ReactNode {
	const [dataTheme, setDataTheme] = useState<"dark" | "light">(
		localStorage.getItem("data-theme") as "dark" | "light"
	);

	useEffect(() => {
		applyTheme(dataTheme);
	}, [dataTheme]);

	return (
		<>
			<Header dataTheme={dataTheme} setDataTheme={setDataTheme} />
			<Hero />
			<Features />
			<Testimonials />
			<Price />
			<CTA />
		</>
	);
}
