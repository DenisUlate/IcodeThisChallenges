document.addEventListener("DOMContentLoaded", function () {
	const closeButton = document.getElementById("close");
	const banner = document.getElementById("banner");
	const overlay = document.getElementById("overlay");
	const bgImg = document.getElementById("bg-img");

	closeButton.addEventListener("click", function () {
		banner.classList.add("hidden");
		overlay.classList.add("hidden");
		bgImg.classList.add("opacity-[1]");
	});
});
