function App() {
	return (
		<div className="relative flex justify-center items-center h-screen">
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

			<section className="bg-gradient-to-r from-neutral-800 to-neutral-950 w-full max-w-[50rem] min-h-[30rem] rounded-xl card-shadow flex flex-col md:flex-row p-0 md:p-8 items-center md:items-start">
				{/* card image */}
				<div className="w-full md:w-1/3">
					<img
						src="https://p1-api.wowconcept.com/cdn-cgi/image/format=auto,fit=scale-down/https://p1-api.wowconcept.com/medias/1200Wx1200H-BOS7AHI00177NOU002?context=bWFzdGVyfHJvb3R8NDUwODQ5fGltYWdlL3BuZ3xhR1UyTDJneVpDOHhOVEU0T0RBMU1qUTNOVGt6TkM4eE1qQXdWM2d4TWpBd1NGOUNUMU0zUVVoSk1EQXhOemRPVDFVd01ESXxhOTA0Mzc2ZTcyNTA1M2E5ZTVkOWU3MGFjZDE1NWZlYTUwZDk4ZTRiMTE0OTljNzQyMmMzMTVlNDRiOTc0NzEz"
						alt="card image"
						className="w-[70%] mx-auto md:w-full h-50 object-cover p-4"
					/>
				</div>

				{/* card content */}
				<div className="w-full md:w-2/3 p-6">
					<p className="p-2 bg-gradient-to-r from-violet-800 to-indigo-950 rounded-full text-white text-xs max-w-[10rem] text-center mb-4">
						Free shipping
					</p>
					<h1 className="text-3xl font-bold text-neutral-100 mb-6">
						BOSE - Quiet Comfort Headphones
					</h1>
					<p className="text-sm text-gray-300 line-through mb-2">699,00 €</p>
					<p className="text-white font-bold text-2xl">399,00 €</p>
					<p className="text-neutral-400 mt-2">
						The offer is valid until April 3 or as long as stocks last.
					</p>
					<button className="w-full bg-gradient-to-r from-violet-800 to-indigo-950 rounded-full text-white px-8 py-4 my-8 relative overflow-hidden group">
						<span className="relative z-10">Add to cart</span>
						<div className="absolute inset-0 bg-gradient-to-l from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
					</button>

					<p className="text-white text-sm my-4 flex items-center">
						<i className="bx bxs-circle text-violet-700 mr-2"></i>
						50+ pcs. in stock.
					</p>

					<div className="flex flex-col md:flex-row md:gap-4">
						<button className="w-full bg-white text-black rounded-full px-8 py-2 mt-4 relative overflow-hidden group">
							<span className="relative z-10 flex items-center justify-center transition-colors duration-400 ease-in-out group-hover:text-white">
								<i className="bx bx-cart-add mr-2 text-2xl transition-colors duration-400 ease-in-out group-hover:text-white"></i>{" "}
								Add to cart
							</span>
							<div className="absolute inset-0 bg-gradient-to-l from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out"></div>
						</button>
						<button className="w-full bg-white text-black rounded-full px-8 py-2 mt-4 relative overflow-hidden group">
							<span className="relative z-10 flex items-center justify-center transition-colors duration-400 ease-in-out group-hover:text-white">
								<i className="bx bx-heart mr-2 text-2xl transition-colors duration-400 ease-in-out group-hover:text-white"></i>{" "}
								Add to wishlist
							</span>
							<div className="absolute inset-0 bg-gradient-to-l from-indigo-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out"></div>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
