import Home from "../assets/images/Home.png";
import About4 from "../assets/images/About 4.png";
import About5 from "../assets/images/About 5.png";

function DesingSection() {
	return (
		<section className=" px-4 py-10">
			<div className="flex flex-col py-6 space-y-8">
				<div>
					<h2 className="mb-2 text-4xl font-bold text-balance">
						Save time and design fast
					</h2>
					<p className="text-neutral-700">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem quo modi obcaecati velit dolorum impedit, fuga
						placeat magni rerum voluptate.
					</p>
				</div>
				<div className="mx-auto">
					<img src={Home} alt="img" />
				</div>
			</div>

			<div className="flex flex-col py-6 space-y-8">
				<div>
					<h2 className="mb-2 text-4xl font-bold text-balance">
						Put the spotlight on your product&apos;s features.
					</h2>
					<p className="text-neutral-700">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem quo modi obcaecati velit dolorum impedit, fuga
						placeat magni rerum voluptate.
					</p>
				</div>
				<div className="mx-auto">
					<img src={About4} alt="img" />
				</div>
			</div>

			<div className="flex flex-col py-6 space-y-8">
				<div>
					<h2 className="mb-2 text-4xl font-bold text-balance">
						Showcase some impressive features
					</h2>
					<p className="text-neutral-700">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem quo modi obcaecati velit dolorum impedit, fuga
						placeat magni rerum voluptate.
					</p>
				</div>
				<div className="mx-auto">
					<img src={About5} alt="img" />
				</div>
			</div>
		</section>
	);
}

export default DesingSection;
