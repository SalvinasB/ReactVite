import React from "react";
import "./DogsInShapes.css";

const DogsInShapes = ({ dogs }) => {
	return (
		<div className="shapes-container">
			{dogs.map((dog, index) => (
				<div key={index} className={index % 2 === 0 ? "square" : "triangle"}>
					{dog}
				</div>
			))}
		</div>
	);
};

export default DogsInShapes;
