import React from "react";

function C({ letter, toggleLetters }) {
	return (
		<div>
			<h2>{letter}</h2>
			<button onClick={toggleLetters}>Keisti raidžių vietas</button>
		</div>
	);
}

export default C;
