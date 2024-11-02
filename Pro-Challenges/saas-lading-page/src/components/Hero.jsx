import {
	ArrowRightIcon,
	ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

function Hero() {
	return (
		<div className="flex flex-col gap-4 text-center mt-8">
			<h1 className="text-5xl font-bold text-balance leading-snug">
				Launch a saas product in style
			</h1>
			<p className="text-lg text-balance text-neutral-700">
				Create a stylish website easy and for everyone – SaaS Platforms,
				Technology Startups and more.
			</p>

			<div className="flex flex-col w-full gap-4">
				<button className="bg-neutral-950 text-neutral-200 font-semibold flex items-center justify-center gap-4 w-full px-6 py-4 rounded-md hover:bg-neutral-700">
					Buy Now <ArrowRightIcon class="h-6 w-6 text-gray-300" />
				</button>
				<button className="bg-slate-300 text-neutral-800 font-semibold flex items-center justify-center gap-4 w-full px-6 py-4 rounded-md hover:bg-slate-200">
					Preview in Figma
					<ArrowTopRightOnSquareIcon class="h-6 w-6 text-gray-500" />
				</button>
			</div>
		</div>
	);
}

export default Hero;
