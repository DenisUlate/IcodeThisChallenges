import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<button onClick={toggleMenu}>
				{isMenuOpen ? (
					<XMarkIcon class="h-8 w-8 text-nuetral-950" />
				) : (
					<Bars3Icon className="h-8 w-8 text-neutral-950" />
				)}
			</button>

			{isMenuOpen && (
				<div>
					<nav className="flex flex-col items-center gap-8 text-xl font-semibold">
						<a href="/" className="text-neutral-950 hover:underline">
							What is Launch?
						</a>
						<a href="/" className="text-neutral-950 hover:underline">
							Pricing
						</a>
						<a href="/" className="text-neutral-950 hover:underline">
							FAQ
						</a>
					</nav>

					<button className="bg-slate-300 p-4 rounded-md shadow-transparent hover:bg-slate-200 hover:shadow-sm hover:shadow-neutral-400">
						Buy Now
					</button>
				</div>
			)}
		</div>
	);
}

export default Navbar;
