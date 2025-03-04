import React from "react";

const NestedChildComponent = ({ propFromApp }) => {
	return (
		<div>
			<h3>Nested Child Component</h3>
			<p>Received prop: {propFromApp}</p>
		</div>
	);
};

export default NestedChildComponent;
