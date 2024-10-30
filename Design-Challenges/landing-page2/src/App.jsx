import { useState } from "react";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<body className="flex flex-col min-h-screen">
			<header className="relative flex justify-around bg-white border-b border-[#f5ede5] p-8">
				<h1 className="font-bold tracking-widest text-xl text-[#ceced0] flex items-center">
					LOGO
				</h1>

				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-2xl">
						{isMenuOpen ? (
							<i className="bx bx-x"></i>
						) : (
							<i className="bx bx-menu"></i>
						)}
					</button>
				</div>

				<nav
					className={`${
						isMenuOpen ? "block h-screen z-10" : "hidden"
					} md:block absolute top-full left-0 right-0 bg-white md:relative`}>
					<ul
						className="flex flex-col items-center pt-20  md:flex-row md:pt-0 gap-5 [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-md [&>li]:transition [&>li]:cursor-pointer
        hover:[&>li]:bg-[#ceced0]/40">
						<li>Home</li>
						<li>Articles</li>
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
				<div className="hidden md:flex text-white gap-4 ">
					<button className="rounded-md px-6 py-2 shadow-xl bg-[#f5ede5] text-[#020737] hover:bg-[#ceced0] hover:text-white">
						Log In
					</button>
					<button className="rounded-md px-6 py-2 shadow-xl bg-[#020737] hover:bg-white hover:text-[#020737] hover:border hover:border-[#020737]">
						Start Free Trial
					</button>
				</div>
			</header>
			{/* Hero section */}
			<section className="flex flex-col items-center justify-center h-auto bg-[#fffcf9] py-40 px-3 md:px-0 border-b border-[#f5ede5]">
				<h1 className="max-w-[600px] text-center leading-snug text-6xl font-bold text-[#020737]">
					A modern way to build websites.
				</h1>
				<p className="max-w-[600px] text-slate-800 font-semibold text-lg my-8 text-center">
					Empower designers to build professional, custom websites in a
					completely visual canvas with no code
				</p>
				<button className="rounded-md px-8 py-4 text-white shadow-xl bg-[#020737] hover:bg-white hover:text-[#020737] hover:border hover:border-[#020737]">
					Start Free Trial
				</button>
			</section>
			{/* Articles section */}
			<section className="flex flex-col items-center justify-center h-auto py-10 gap-3 p-5 ">
				<div className="flex justify-center text-sm font-semibold text-center w-[700px] max-w-full gap-3 items-center">
					<div className="h-[0.1px] w-1/4 bg-[#020737]"></div>
					<h3>We share our thoughts on design</h3>
					<div className="h-[0.1px] w-1/4 bg-[#020737]"></div>
				</div>

				<div className="w-full md:max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-6 [&>div>p]:my-6 [&>div>p]:font-bold [&>div>p]:text-lg">
					<div>
						<img
							src="https://plus.unsplash.com/premium_photo-1663013659189-58ff1c9e1976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image1"
						/>
						<p>Redesigning my site increased sales by over 400% in one week.</p>
						<small>Juli 1, 2020</small>
					</div>
					<div>
						<img
							src="https://plus.unsplash.com/premium_photo-1661770132071-026114fffb61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image2"
						/>
						<p>Design handoff: What engineers really want to see</p>
						<small>Juli 1, 2020</small>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image3"
						/>
						<p>A comprehensive list of human-computer interactions</p>
						<small>Juli 1, 2020</small>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="image4"
						/>
						<p>Why do people hate redesigns?</p>
						<small>Juli 1, 2020</small>
					</div>
				</div>
			</section>
		</body>
	);
}

export default App;
