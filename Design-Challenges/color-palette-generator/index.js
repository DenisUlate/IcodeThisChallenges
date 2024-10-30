document.addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector("button");
	const colorContainers = document.querySelectorAll(".color-container");

	button.addEventListener("click", generatePalette);
	document.addEventListener("keydown", (e) => {
		if (e.code === "Space") {
			e.preventDefault();
			generatePalette();
		} else if (e.code === "KeyC") {
			e.preventDefault();
			copyAllColors();
		}
	});

	function generatePalette() {
		colorContainers.forEach((container) => {
			const randomColor = getRandomColor();
			const colorBox = container.querySelector(".color-palette");
			const colorText = container.querySelector(".palette-text");
			colorBox.style.backgroundColor = randomColor;
			colorText.textContent = randomColor;

			colorBox.addEventListener("click", () => {
				copyToClipboard(randomColor);
			});
		});
	}

	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function copyToClipboard(text) {
		const textarea = document.createElement("textarea");
		textarea.value = text;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		alert(`Copied color: ${text}`);
	}

	function copyAllColors() {
		let allColors = [];
		colorContainers.forEach((container) => {
			const colorText = container.querySelector(".palette-text").textContent;
			allColors.push(colorText);
		});
		const allColorsText = allColors.join(", ");
		const textarea = document.createElement("textarea");
		textarea.value = allColorsText;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);

		alert(`Copied all colors: ${allColorsText}`);
	}
});
