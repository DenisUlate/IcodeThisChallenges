document.addEventListener("DOMContentLoaded", () => {
	const paginationNumbers = document.getElementById("pagination-numbers");
	const prevButton = document.getElementById("prev");
	const nextButton = document.getElementById("next");
	const minPage = 1;
	const maxPage = 14;
	let currentPage = 8; // Default page

	function createPaginationNumbers() {
		paginationNumbers.innerHTML = ""; // Clear existing numbers
		const numbers = getPageNumbers();

		numbers.forEach((num) => {
			if (num === "...") {
				const ellipsis = document.createElement("span");
				ellipsis.className = "pagination-ellipsis";
				ellipsis.textContent = "...";
				paginationNumbers.appendChild(ellipsis);
			} else {
				const numberButton = document.createElement("button");
				numberButton.className = "pagination-number";
				numberButton.textContent = num;
				numberButton.addEventListener("click", () => setCurrentPage(num));
				if (num === currentPage) {
					numberButton.classList.add("active");
				}
				paginationNumbers.appendChild(numberButton);
			}
		});
	}

	function getPageNumbers() {
		const numbers = [];
		if (maxPage <= 7) {
			// If total pages are 7 or less, show all pages
			for (let i = minPage; i <= maxPage; i++) {
				numbers.push(i);
			}
		} else {
			// Always include first page, last page, and pages around current page
			numbers.push(1);
			if (currentPage > 3) {
				numbers.push("...");
			}
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(maxPage - 1, currentPage + 1);
			for (let i = start; i <= end; i++) {
				numbers.push(i);
			}
			if (currentPage < maxPage - 2) {
				numbers.push("...");
			}
			numbers.push(maxPage);
		}
		return numbers;
	}

	function setCurrentPage(pageNum) {
		currentPage = pageNum;
		createPaginationNumbers();
		updatePagination();
	}

	function updatePagination() {
		const numberButtons = document.querySelectorAll(".pagination-number");
		numberButtons.forEach((button) => {
			button.classList.remove("active");
			const pageNum = parseInt(button.textContent);
			if (pageNum === currentPage) {
				button.classList.add("active");
			}
			button.style.display = shouldShowButton(pageNum)
				? "inline-block"
				: "none";
		});

		prevButton.disabled = currentPage === minPage;
		nextButton.disabled = currentPage === maxPage;
	}

	function shouldShowButton(pageNum) {
		return (
			pageNum === minPage ||
			pageNum === maxPage ||
			(pageNum >= currentPage - 1 && pageNum <= currentPage + 1) ||
			(pageNum === currentPage - 2 && currentPage > minPage + 2) ||
			(pageNum === currentPage + 2 && currentPage < maxPage - 2)
		);
	}

	prevButton.addEventListener("click", () => {
		if (currentPage > minPage) {
			setCurrentPage(currentPage - 1);
		}
	});

	nextButton.addEventListener("click", () => {
		if (currentPage < maxPage) {
			setCurrentPage(currentPage + 1);
		}
	});

	createPaginationNumbers();
	updatePagination();
});
