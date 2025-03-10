import React, { useState } from "react";

function CircleSquare() {
	const [isCircle, setIsCircle] = useState(true);

	const toggleShape = () => {
		setIsCircle(!isCircle);
	};

	return (
		<div>
			<div
				style={{
					width: "100px",
					height: "100px",
					borderRadius: isCircle ? "50%" : "0",
					backgroundColor: "lightgreen",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: "10px"
				}}
			>
				{isCircle ? "Circle" : "Square"}
			</div>
			<button onClick={toggleShape}>Change</button>
		</div>
	);
}

export default CircleSquare;
