import {
	ArrowRightIcon,
	ArrowTopRightOnSquareIcon,
	Bars2Icon,
	CodeBracketSquareIcon,
	MoonIcon,
	PaintBrushIcon,
} from "@heroicons/react/24/outline";
import Image from "../assets/images/Frame.png";

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

			<div className="flex flex-col w-full gap-4 px-6">
				<button className="bg-neutral-950 text-neutral-200 font-semibold flex items-center justify-center gap-4 w-full px-6 py-4 rounded-md hover:bg-neutral-700">
					Buy Now <ArrowRightIcon class="h-6 w-6 text-gray-300" />
				</button>
				<button className="bg-slate-300 text-neutral-800 font-semibold flex items-center justify-center gap-4 w-full px-6 py-4 rounded-md hover:bg-slate-200">
					Preview in Figma
					<ArrowTopRightOnSquareIcon class="h-6 w-6 text-gray-500" />
				</button>
			</div>

			<div className="relative mt-14 px-0">
				<img
					src={Image}
					alt="technology"
					className="w-full h-96 object-cover overflow-hidden"
				/>
				<span className="absolute bottom-0 left-0 bg-gradient-to-t from-white to-transparent w-full h-[18rem] z-50"></span>
			</div>

			<div className="flex flex-col items-center justify-center bg-neutral-950 w-full text-neutral-200 text-center p-8 space-y-8">
				<h2 className="text-balance text-4xl">Customize however you want</h2>

				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="w-16 h-16">
						<Bars2Icon className="rounded-full bg-blue-300 text-neutral-950 p-4" />
					</div>
					<h3 className="text-xl font-semibold">Modular design</h3>
					<p className="text-slate-400 text-balance">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
						unde!
					</p>
				</div>

				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="w-16 h-16">
						<CodeBracketSquareIcon className="rounded-full bg-blue-300 text-neutral-950 p-4" />
					</div>
					<h3 className="text-xl font-semibold">Modular design</h3>
					<p className="text-slate-400 text-balance">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
						unde!
					</p>
				</div>

				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="w-16 h-16">
						<PaintBrushIcon className="rounded-full bg-blue-300 text-neutral-950 p-4" />
					</div>
					<h3 className="text-xl font-semibold">Modular design</h3>
					<p className="text-slate-400 text-balance">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
						unde!
					</p>
				</div>

				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<div className="w-16 h-16">
						<MoonIcon className="rounded-full bg-blue-300 text-neutral-950 p-4" />
					</div>
					<h3 className="text-xl font-semibold">Modular design</h3>
					<p className="text-slate-400 text-balance">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
						unde!
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
