import React from "react";

const ChildComponent1 = ({ propFromApp }) => {
	return (
		<div>
			<h3>Child Component 1</h3>
			<p>Received prop: {propFromApp}</p>
		</div>
	);
};

export default ChildComponent1;
