import React, { useMemo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import "../../styles/app.css";
const TempDiv = styled.div`
	position: relative;
	width: fit-content;
	&:hover :first-child {
		opacity: 1;
		z-index: 50;
	}
`;
const TempSpan = styled.span`
	position: absolute;
	font-size: 0.8rem;
	z-index: -100;
	opacity: 0;
	transition: 0.5s ease;
	padding: 4px 8px;
	border-radius: 2px;
`;
export function Tooltip({ children, text, position, backgroundcolor, color }) {
	const style = useMemo(
		() => ({
			backgroundColor: backgroundcolor || colors.primary,
			color: color || "white",
			transform:
				(console.log("processed") &&
					position === "tr" &&
					"translate(-100%,-120%)") ||
				(position === "tc" && "translate(-50%,-120%)") ||
				(position === "tl" && "translate(0%,-120%)") ||
				(position === "rt" && "translate(5px,0%)") ||
				(position === "rm" && "translate(5px,-50%)") ||
				(position === "rb" && "translate(5px,-100%)") ||
				(position === "bl" && "translate(0%,20%)") ||
				(position === "bc" && "translate(-50%,20%)") ||
				(position === "br" && "translate(-100%,20%)") ||
				(position === "lt" && "translate(-105%,0)") ||
				(position === "lm" && "translate(-105%,-50%)") ||
				(position === "lb" && "translate(-105%,-100%)"),
			top:
				(position[0] === "b" && "100%") ||
				(position[0] === "t" && "0%") ||
				(position[1] === "t" && "0%") ||
				(position[1] === "m" && "50%") ||
				(position[1] === "b" && "100%"),
			left:
				(position[0] === "r" && "100%") ||
				(position[0] === "l" && "0%") ||
				(position[1] === "l" && "0%") ||
				(position[1] === "c" && "50%") ||
				(position[1] === "r" && "100%"),
		}),
		[position]
	);

	return (
		<TempDiv>
			<TempSpan style={style}>{text}</TempSpan>
			{children}
		</TempDiv>
	);
}

Tooltip.propTypes = {
	text: PropTypes.string,
	position: PropTypes.oneOf([
		"tl",
		"tc",
		"tr",
		"rt",
		"rm",
		"rb",
		"bl",
		"bc",
		"br",
		"lt",
		"lm",
		"lb",
	]),
	backgroundcolor: PropTypes.string,
	color: PropTypes.string,
};
