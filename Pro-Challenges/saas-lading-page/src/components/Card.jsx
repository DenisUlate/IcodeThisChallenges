function Card({ image, title, text, color, button, icon }) {
	const backgroundColor = color || "bg-gray-300";
	return (
		<div
			className={`${backgroundColor} p-8 rounded-2xl text-balance h-[20rem] flex flex-col justify-center`}>
			{image && (
				<img className="w-[20rem] h-auto mx-auto" src={image} alt={title} />
			)}
			<h3 className="text-2xl font-semibold mb-4">{title}</h3>
			<p>{text}</p>

			{button && (
				<button className="bg-primary-500 text-white px-4 py-2 mt-4 rounded-lg font-semibold flex items-center justify-start">
					{button}{" "}
					{icon && <span className="ml-4 font-bold text-2xl">{icon}</span>}
				</button>
			)}
		</div>
	);
}

export default Card;
