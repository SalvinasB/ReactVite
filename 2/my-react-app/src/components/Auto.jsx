import React from "react";
import Maker from "./Maker";

const Auto = () => {
	const cars = [{ brand: "Toyota" }, { brand: "BMW" }, { brand: "Audi" }];

	return (
		<div>
			{cars.map((car, index) => (
				<Maker key={index} brand={car.brand} />
			))}
		</div>
	);
};

export default Auto;
