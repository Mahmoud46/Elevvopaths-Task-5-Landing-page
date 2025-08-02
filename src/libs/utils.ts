export const applyTheme = (theme: "light" | "dark") => {
	localStorage.setItem("data-theme", theme);
	document.documentElement.setAttribute("data-theme", theme);
};
