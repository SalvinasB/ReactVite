import React from "react";

const ColorText = ({ props }) => {
	const color = props === 1 ? "blue" : "red";
	return <h1 style={{ color }}>Zebrai ir Bebrai</h1>;
};

export default ColorText;
