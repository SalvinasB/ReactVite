import React from "react";
import "./DogsInCircles.css";

const DogsInCircles = ({ dogs }) => {
	const sortedDogs = [...dogs].sort((a, b) => b.length - a.length);
	return (
		<div className="circles-container">
			{sortedDogs.map((dog, index) => (
				<div key={index} className="circle">
					{dog}
				</div>
			))}
		</div>
	);
};

export default DogsInCircles;
