import React, { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Plus</button>
			<button onClick={() => setCount(count - 3)}>Minus</button>
		</div>
	);
}

export default Counter;
