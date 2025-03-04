import React from "react";
import "./DogsInSquares.css";

const DogsInSquares = ({ dogs }) => {
	return (
		<div className="squares-container">
			{dogs.map((dog, index) => (
				<div key={index} className="square">
					{dog}
				</div>
			))}
		</div>
	);
};

export default DogsInSquares;
