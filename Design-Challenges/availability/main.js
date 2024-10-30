const animateElements = document.querySelectorAll(".animate");

animateElements.forEach((element, index) => {
	setTimeout(() => {
		element.classList.add("show");
	}, index * 150);
});

document.getElementById("doneButton").addEventListener("click", () => {
	const messageElement = document.getElementById("settingsMessage");
	const cardElement = document.getElementById("cardContainer");
	cardElement.style.display = "none";
	messageElement.style.display = "flex";

	setTimeout(() => {
		messageElement.style.display = "none";
		cardElement.style.display = "block";
	}, 3000);
});
