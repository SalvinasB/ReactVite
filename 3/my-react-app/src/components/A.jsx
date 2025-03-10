import React, { useState } from "react";
import C from "./C";

function A() {
	const [showC, setShowC] = useState(false);
	const [letterC, setLetterC] = useState("");
	const [toggle, setToggle] = useState(false);

	const handleButtonClick = () => {
		setLetterC("C");
		setShowC(true);
	};

	const toggleLetters = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<h2>{toggle ? "C" : "A"}</h2>
			<button onClick={handleButtonClick}>Sukurti raidę C</button>
			{showC && (
				<C letter={toggle ? "A" : letterC} toggleLetters={toggleLetters} />
			)}
		</div>
	);
}

export default A;
