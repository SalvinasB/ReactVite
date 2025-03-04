// myComponent.jsx
import React, { Component } from "react";

export class myComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			square: []
		};
		this.simpleFunc = this.simpleFunc.bind(this);
	}

	simpleFunc() {
		console.log("I am simple function", this);
	}

	arrowFunction = () => {
		console.log("I am arrow function", this);
	};

	generateSquare = () => {
		const randomNumber = Math.floor(Math.random() * 11) + 10; // 10 + 0-10
		this.setState((prevState) => ({
			square: [...prevState.square, randomNumber]
		}));
	};

	render() {
		const { color, input } = this.props;
		const { square } = this.state;

		const boxStyle = {
			backgroundColor: color,
			padding: "20px",
			borderRadius: "5px",
			color: "white"
		};

		return (
			<div>
				<p style={boxStyle}>{input}</p>

				<button onClick={this.simpleFunc}>SimpleFunc</button>
				<button onClick={this.arrowFunction}>ArrowFunc</button>
				<button onClick={() => this.arrowFunction()}>ArrowFunc2</button>
				<button onClick={() => this.simpleFunc()}>SimpleFunc2</button>
				<button onClick={this.generateSquare}>Generuoti kvadratą</button>

				<div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
					{square.map((number, index) => (
						<div
							key={index}
							style={{
								width: "50px",
								height: "50px",
								backgroundColor: "lightblue",
								margin: "5px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								borderRadius: "5px",
								fontSize: "20px",
								color: "#fff"
							}}
						>
							{number}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default myComponent;
