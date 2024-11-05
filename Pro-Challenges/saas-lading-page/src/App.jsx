import DesingSection from "./components/DesingSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductionSection from "./components/ProductionSection";

function App() {
	return (
		<div className="py-6">
			<div className="bg-neutral-950 text-neutral-200 flex items-center justify-center gap-4 p-4">
				<p>New! We launched our affiliate program!</p>
				<a href="/" className="underline">
					See more
				</a>
			</div>

			{/* HEADER */}
			<Header />
			<Hero />
			<DesingSection />
			<ProductionSection />
		</div>
	);
}

export default App;
