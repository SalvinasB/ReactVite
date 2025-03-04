import React from "react";
import ChildComponent3 from "./ChildComponent3";

const ChildComponent2 = ({ propFromApp }) => {
	return (
		<div>
			<h3>Child Component 2</h3>
			<p>Received prop: {propFromApp}</p>
			<ChildComponent3 propFromApp={propFromApp} />
		</div>
	);
};

export default ChildComponent2;
