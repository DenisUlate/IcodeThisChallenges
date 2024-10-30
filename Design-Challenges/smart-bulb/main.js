document.getElementById("login-form").addEventListener("submit", function (e) {
	e.preventDefault();

	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username && password) {
		document.getElementById("login-section").classList.add("hidden");
		document.getElementById("switch-section").classList.remove("hidden");
	} else {
		alert("Please enter a username and password");
	}
});

function toggleSwitch() {
	const body = document.querySelector("body");
	const container = document.querySelector(".container");
	const bulbIcon = document.getElementById("bulb-icon");
	const btnSwitch = document.getElementById("btn-switch");
	const switchSlider = document.querySelector(".switch-slider");
	const bulbImageLight = document.querySelector(".img-bulb-light");
	const bulbImageDark = document.querySelector(".img-bulb-dark");
	const switchSliderContainer = document.querySelector(
		".switch-slider-container"
	);

	container.classList.toggle("active");
	bulbIcon.classList.toggle("active");
	btnSwitch.classList.toggle("active");
	bulbImageLight.classList.toggle("active");
	bulbImageDark.classList.toggle("active");
	body.classList.toggle("active");
	switchSliderContainer.classList.toggle("active");
	switchSlider.classList.toggle("on");

	if (btnSwitch.textContent === "OFF") {
		btnSwitch.textContent = "ON";
	} else {
		btnSwitch.textContent = "OFF";
	}
}

document.getElementById("btn-switch").addEventListener("click", toggleSwitch);
document
	.getElementById("img-bulb-dark")
	.addEventListener("click", toggleSwitch);
document
	.getElementById("img-bulb-light")
	.addEventListener("click", toggleSwitch);
