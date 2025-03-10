import React from "react";
import "./App.css";
import A from "./components/A";
import CircleSquare from "./components/CircleSquare";
import Counter from "./components/Counter";
import ColorSquare from "./components/ColorSquare";
import ColorReset from "./components/ColorReset";
import RandomCircle from "./components/RandomCircle";

function App() {
	return (
		<div>
			<h1>Raidžių programa</h1>
			<CircleSquare />
			<h2>-------------------------------------</h2>
			<RandomCircle />
			<h2>-------------------------------------</h2>
			<Counter />
			<h2>-------------------------------------</h2>
			<ColorSquare />
			<h2>-------------------------------------</h2>
			<ColorReset />
		</div>
	);
}

export default App;
