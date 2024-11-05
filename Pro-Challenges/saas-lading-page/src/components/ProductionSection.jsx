import Card from "./Card";
import ProductionImage1 from "../assets/images/Production1.png";
import ProductionImage2 from "../assets/images/Production2.png";
import ProductionImage3 from "../assets/images/Production3.png";
import ProductionImage4 from "../assets/images/Production4.png";

function ProductionSection() {
	return (
		<section className="px-4 py-8">
			<div className="text-center space-y-6 py-16">
				<p className="font-semibold">Production ready</p>
				<h2 className="text-3xl text-balance font-bold">
					Showcase some impressive features
				</h2>
				<p className="text-balance text-neutral-500">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
					atque voluptatum sunt aut possimus consequatur! Impedit vitae nisi
					totam velit!
				</p>
			</div>

			<div className="flex flex-col gap-6">
				<Card
					title="Build for Consistancy"
					text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
					atque voluptatum sunt aut possimus consequatur! Impedit vitae nisi
					totam velit!"
					color={"bg-sky-400"}
				/>

				<Card image={ProductionImage1} />
				<Card image={ProductionImage2} />
				<Card image={ProductionImage3} />
				<Card image={ProductionImage4} />

				<Card
					title="Pre-build Pages"
					text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
					atque voluptatum sunt aut possimus consequatur! Impedit vitae nisi
					totam velit!"
					color={"bg-sky-400"}
					button="Try out"
					icon="→"
				/>
			</div>
		</section>
	);
}

export default ProductionSection;
