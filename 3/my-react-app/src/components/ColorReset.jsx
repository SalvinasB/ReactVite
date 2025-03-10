import React, { useState } from "react";

function ColorReset() {
	const [squares, setSquares] = useState([]);

	const addSquare = (color) => {
		setSquares([...squares, color]);
	};

	const resetSquares = () => {
		setSquares([]);
	};

	return (
		<div>
			<button onClick={() => addSquare("red")}>Add Red</button>
			<button onClick={() => addSquare("blue")}>Add Blue</button>
			<button onClick={resetSquares}>Reset</button>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
					gap: "10px",
					marginTop: "10px"
				}}
			>
				{squares.map((color, index) => (
					<div
						key={index}
						style={{
							width: "50px",
							height: "50px",
							backgroundColor: color
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default ColorReset;
