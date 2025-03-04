import React from "react";

// export const firstfunctional = (props) => {
// 	const { dog, name } = props;
// 	return <div>{console.log(props.dog)}</div>;
// };

export const FirstFunctional = ({ dog, name, color, text }) => {
	return (
		<div
			style={{
				backgroundColor: color,
				padding: "10px",
				margin: "10px",
				borderRadius: "5px"
			}}
		>
			{console.log(dog)}
			<p style={{ color: "White" }}>{name}</p>
			<p style={{ color: "White" }}>{text}</p>
		</div>
	);
};
