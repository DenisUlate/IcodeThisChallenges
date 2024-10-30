function addMorePortraits(portraits) {
	const button = document.getElementById("view-all-btn");
	const ul = document.getElementById("portrait-list");

	button.addEventListener("click", () => {
		const addedPortraits = document.querySelectorAll(".added-portrait");
		if (addedPortraits.length > 0) {
			addedPortraits.forEach((portrait) => {
				portrait.classList.remove("visible");
				button.textContent = "View All";
				setTimeout(() => portrait.remove(), 500);
			});
		} else {
			for (const key in portraits) {
				if (portraits.hasOwnProperty(key)) {
					const portrait = portraits[key];

					button.textContent = "Close";

					const li = document.createElement("li");
					li.className = "added-portrait";
					const img = document.createElement("img");
					img.src = portrait.image;
					img.alt = "portrait-img";

					const div = document.createElement("div");
					div.className = "portrait-text-container";

					const h3 = document.createElement("h3");
					h3.textContent = portrait.name;

					const p = document.createElement("p");
					p.textContent = `${portrait.age} years`;

					div.appendChild(h3);
					div.appendChild(p);
					li.appendChild(img);
					li.appendChild(div);
					ul.appendChild(li);

					setTimeout(() => li.classList.add("visible"), 10);
				}
			}
		}
	});
}

const morePortraits = {
	portrait1: {
		image:
			"https://plus.unsplash.com/premium_photo-1710695568547-55afb2b5a1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXRzfGVufDB8fDB8fHww",
		name: "John Doe",
		age: 30,
	},
	portrait2: {
		image:
			"https://images.unsplash.com/photo-1519744434498-a0de604df9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXRzfGVufDB8fDB8fHww",
		name: "Jane Smith",
		age: 28,
	},
	portrait3: {
		image:
			"https://images.unsplash.com/photo-1579463148228-138296ac3b98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
		name: "Alice Johnson",
		age: 35,
	},
	portrait4: {
		image:
			"https://images.unsplash.com/photo-1603384699007-50799748fc45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
		name: "Bob Brown",
		age: 40,
	},
	portrait5: {
		image:
			"https://images.unsplash.com/photo-1521038063972-ab961f8515b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D",
		name: "Charlie Davis",
		age: 25,
	},
};

addMorePortraits(morePortraits);
