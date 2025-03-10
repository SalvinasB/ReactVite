import React, { useState } from "react";

function RandomCircle() {
	const [isCircle, setIsCircle] = useState(true);
	const [randomNumber, setRandomNumber] = useState(5);

	const toggleShape = () => {
		setIsCircle(!isCircle);
	};

	const generateRandomNumber = () => {
		const randomNum = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
		setRandomNumber(randomNum);
	};

	return (
		<div>
			<div
				style={{
					width: "100px",
					height: "100px",
					borderRadius: isCircle ? "50%" : "0",
					backgroundColor: "lightblue",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "10px"
				}}
			>
				{randomNumber}
			</div>
			<button onClick={toggleShape}>Change</button>
			<button onClick={generateRandomNumber}>Random</button>
		</div>
	);
}

export default RandomCircle;
