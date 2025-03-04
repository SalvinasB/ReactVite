import { useState } from "react";

import Auto from "./components/Auto";
import HelloZuiqi from "./components/HelloZuiqi";
import TextDisplay from "./components/TextDisplay";
import ColorText from "./components/ColorText";
import StyledText from "./components/StyledText";
import { propsData } from "./assets/functions/data2";

import { FirstFunctional } from "./components/FirstFunctional";

import DogsInSquares from "./NewComponents/DogsInSquares";
import DogsInCircles from "./NewComponents/DogsInCircles";
import DogsInShapes from "./NewComponents/DogsInShapes";
import DogsSkippingUppercase from "./NewComponents/DogsSkippingUppercase";
import DogsLengthNumbers from "./NewComponents/DogsLengthNumbers";

import ChildComponent1 from "./NewComponents2/ChildComponent1";
import ChildComponent2 from "./NewComponents2/ChildComponent2";
import NestedChildComponent from "./NewComponents2/NestedChildComponent";

import "./App.css";
import { dogsArray } from "./assets/functions/data";
import { dogsArray2 } from "./assets/functions/data3";

function App() {
	const propValue1 = "prop from App 1";
	const propValue2 = "prop from App 2";

	return (
		<>
			<Auto />
			<HelloZuiqi />
			<TextDisplay text="Sveiki atvyke!" />
			<ColorText props={1} />
			<StyledText
				text1={propsData.text1}
				text2={propsData.text2}
				color={propsData.color}
			/>
			<FirstFunctional
				dog={dogsArray}
				name="Bobikas"
				color="red"
				text="Suo Bobikas"
			/>
			<FirstFunctional
				dog={dogsArray}
				name="Margis"
				color="blue"
				text="Suo Margis"
			/>
			<FirstFunctional
				dog={dogsArray}
				name="Plutas"
				color="green"
				text="Suo Plutas"
			/>

			<h2>Sunys kvadratuose:</h2>
			<DogsInSquares dogs={dogsArray2} />

			<h2>Sunys apskritimuose:</h2>
			<DogsInCircles dogs={dogsArray2} />

			<h2>Sunys formose:</h2>
			<DogsInShapes dogs={dogsArray2} />

			<h2>Sunys, praleidziantys didziasias raides:</h2>
			<DogsSkippingUppercase dogs={dogsArray2} />

			<h2>Zodziu ilgiai:</h2>
			<DogsLengthNumbers dogs={dogsArray2} />

			<h2>Vaikiniu komponentu pavyzdys:</h2>
			<ChildComponent1 propFromApp={propValue1} />
			<ChildComponent2 propFromApp={propValue2} />

			<h2>Gili struktura su keturiais sluoksniais:</h2>
			<div>
				<NestedChildComponent propFromApp={propValue1} />
				<ChildComponent2 propFromApp={propValue2} />
			</div>
		</>
	);
}

export default App;
