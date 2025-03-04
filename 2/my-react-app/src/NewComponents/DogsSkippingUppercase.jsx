import React from "react";

const DogsSkippingUppercase = ({ dogs }) => {
	return (
		<div>
			{dogs
				.filter((dog) => !dog.startsWith("š"))
				.map((dog, index) => (
					<div key={index}>{dog}</div>
				))}
		</div>
	);
};

export default DogsSkippingUppercase;
