document.addEventListener("DOMContentLoaded", () => {
	const openMenuBtn = document.getElementById("open-menu-btn");
	const closeMenuBtn = document.getElementById("close-menu-btn");
	const filterMenu = document.getElementById("filter-menu");

	openMenuBtn.addEventListener("click", () => {
		filterMenu.classList.remove("hidden", "scale-0", "opacity-0");
		filterMenu.classList.add("scale-100");
		openMenuBtn.classList.add("hidden");
		closeMenuBtn.classList.remove("hidden");
	});

	closeMenuBtn.addEventListener("click", () => {
		filterMenu.classList.remove("scale-100");
		filterMenu.classList.add("scale-0", "opacity-0");
		setTimeout(() => {
			filterMenu.classList.add("hidden");
		}, 300);
		closeMenuBtn.classList.add("hidden");
		openMenuBtn.classList.remove("hidden");
	});
});
