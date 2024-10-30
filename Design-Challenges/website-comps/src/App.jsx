/* eslint-disable react/prop-types */

const OptionCard = ({ title, description, linkText, buttonText, iconName }) => (
	<div className="bg-gradient-to-b from-slate-800/60 to-zinc-900/80 p-12 rounded-lg shadow-lg flex flex-col justify-center items-center backdrop-blur-sm">
		{iconName && (
			<i className={`bx ${iconName} text-6xl m-4 text-blue-500 rounded-lg`}></i>
		)}
		<h3 className="font-bold text-lg text-gray-300 mb-4">{title}</h3>
		<p className="text-gray-500 text-sm mb-6 text-center">{description}</p>
		<div className="flex items-center space-x-4 ">
			{buttonText && (
				<button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
					{buttonText}
				</button>
			)}
			{linkText && (
				<a
					href="#"
					className="text-blue-500 flex items-center hover:text-gray-400 transition-all duration-300">
					{linkText}
					<i className="bx bx-chevron-right ml-auto text-white text-2xl"></i>
				</a>
			)}
		</div>
	</div>
);

function App() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-sky-700 via-blue-800 to-blue-950">
			<div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#5F5C6D_1px,transparent_1px),linear-gradient(to_bottom,#5F5C6D_1px,transparent_1px)] bg-[size:88px_88px] md:rotate-[-45deg]"></div>

			<div className="relative min-h-screen w-full flex justify-center items-center p-8 md:p-16 md:transform md:-rotate-12 md:scale-[1.42]">
				<div className="max-w-4xl w-full space-y-6 md:scale-[0.7]">
					<div className="bg-gradient-to-b from-slate-800/60 to-zinc-900/80 backdrop-blur-md p-12 rounded-lg shadow-lg">
						<div className="flex items-center gap-6 mb-6">
							<i className="bx bx-cog text-blue-500 text-6xl"></i>
							<h2 className="text-2xl text-gray-300 font-bold">
								Multiple options for you
							</h2>
						</div>

						<div className="space-y-8 flex flex-col md:flex-row md:space-y-0 md:space-x-8 cursor-pointer">
							{[
								"Developer resources for your business",
								"Launch products faster with less code",
								"Improve customer conversion",
							].map((option, index) => (
								<div
									key={index}
									className="flex items-center text-gray-400 hover:text-blue-500 transition-all duration-300">
									<div className="w-4 h-12 rounded bg-blue-500 mr-4"></div>
									{option}
									<i className="bx bx-chevron-right ml-auto text-white text-2xl"></i>
								</div>
							))}
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<OptionCard
							title="Only pay for what you use"
							description="Create an account and start sending invoices. You can also contact us to design a custom package to your business."
							linkText="Pricing details"
							iconName="bxs-credit-card"
						/>
						<OptionCard
							title="Ready to get started?"
							description="Create an account and start sending invoices. You can also contact us to design a custom package to your business."
							buttonText="Start now"
							linkText="Contact sales"
							iconName="bxs-rocket"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
