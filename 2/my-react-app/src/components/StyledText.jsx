import React from "react";

const StyledText = ({ text1, text2, color }) => {
	return (
		<div>
			<h1 style={{ color }}>{text1}</h1>
			<h2 style={{ color }}>{text2}</h2>
		</div>
	);
};

export default StyledText;
