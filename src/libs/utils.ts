export const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const nextTheme = currentTheme === "dark" ? "light" : "dark";
	applyTheme(nextTheme);
};

export const applyTheme = (theme: "light" | "dark") => {
	localStorage.setItem("data-theme", theme);
	document.documentElement.setAttribute("data-theme", theme);
};
