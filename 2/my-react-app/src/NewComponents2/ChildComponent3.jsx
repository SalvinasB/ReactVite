import React from "react";
import ChildComponent4 from "./ChildComponent4";

const ChildComponent3 = ({ propFromApp }) => {
	return (
		<div>
			<h3>Child Component 3</h3>
			<p>Received prop: {propFromApp}</p>
			<ChildComponent4 propFromApp={propFromApp} />
		</div>
	);
};

export default ChildComponent3;
