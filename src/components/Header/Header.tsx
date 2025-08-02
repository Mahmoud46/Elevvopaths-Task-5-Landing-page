import { useEffect, useState, type ReactNode } from "react";
import styles from "./Header.module.scss";
import { FiMoon, FiSun } from "react-icons/fi";
import { toggleTheme } from "../../libs/utils";

export default function Header({
	dataTheme,
	setDataTheme,
}: {
	dataTheme: "dark" | "light";
	setDataTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}): ReactNode {
	const [isScroll, setIsScroll] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= window.innerHeight) setIsScroll(true);
			else setIsScroll(false);
		});
	});

	return (
		<header>
			<div
				className={`${styles["header-cont"]} glass-bg ${
					isScroll ? styles.scroll : ""
				}`}
			>
				<h2 className={styles["brand-logo"]}>VitaLoop One</h2>
				<button
					onClick={() => {
						setDataTheme((prev) => (prev == "dark" ? "light" : "dark"));
						toggleTheme();
					}}
				>
					{dataTheme == "dark" ? <FiSun fill="1" /> : <FiMoon fill="1" />}
				</button>
			</div>
		</header>
	);
}
