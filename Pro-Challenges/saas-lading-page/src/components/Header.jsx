import Navbar from "./Navbar";

function Header() {
	return (
		<div className="flex items-center justify-between px-4 py-8">
			<span className="text-2xl font-bold">launch</span>
			<Navbar />
		</div>
	);
}

export default Header;
