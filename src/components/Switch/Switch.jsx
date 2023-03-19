import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
const Div = styled.div`
	width: 100%;
	aspect-ratio: 3/1;
	background-color: ${colors.primary}99;
	border-radius: 10px;
	display: inline-block;
	position: relative;
	transition: 0.2s ease;
	&:hover {
		span {
			background-color: ${colors.primary};
		}
	}
	&.active {
		background-color: ${colors.primaryAccent}e0;
		span {
			transform: translate(-100%, -50%);
			left: 100%;
		}
	}
`;
const Circle = styled.span`
	transition: 0.2s ease;
	height: 150%;
	border-radius: 50%;
	transform: translate(0, -50%);
	left: 0%;
	top: 50%;
	aspect-ratio: 1/1;
	background-color: ${colors.primaryAccent};
	display: inline-block;
	margin: 0;
	position: absolute;
`;
export function Switch({ state, setState }) {
	if ([state, setState].includes(undefined)) {
		throw new Error(
			"Missing parameters, the switch component needs a boolean state variable and its set function to be passed as state and setState props."
		);
	}
	return (
		<div
			style={{ width: "40px", cursor: "pointer" }}
			onClick={() => {
				setState((prev) => !prev);
			}}
		>
			<Div className={`${state && "active"}`}>
				<Circle></Circle>
			</Div>
		</div>
	);
}

