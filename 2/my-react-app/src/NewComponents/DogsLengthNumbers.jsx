import React from "react";

const DogsLengthNumbers = ({ dogs }) => {
	return (
		<div>
			{dogs.map((dog, index) => {
				const length = dog.length;
				return (
					<div key={index} style={{ color: length > 6 ? "green" : "red" }}>
						{length}
					</div>
				);
			})}
		</div>
	);
};

export default DogsLengthNumbers;
