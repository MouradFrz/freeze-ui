import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import PropTypes from "prop-types";
import { FaRegWindowClose } from "react-icons/fa";
const ToastStyle = styled.div`
	position: absolute;
	width: fit-content;
	padding: 24px 36px;
	opacity: 0;
	width: fit-content;
	min-width: 200px;
	background-color: ${colors.primary};
	color: white;
	transform: ${(props) =>
		(props.position === "tl" && "translate(0,-100%)") ||
		(props.position === "tc" && "translate(-50%,-100%)") ||
		(props.position === "tr" && "translate(-100%,-100%)") ||
		(props.position === "bl" && "translate(0,0)") ||
		(props.position === "bc" && "translate(-50%,0)") ||
		(props.position === "br" && "translate(-100%,0)")};
	top: ${(props) => (props.position[0] === "b" ? "100%" : "0%")};
	left: ${(props) =>
		props.position[1] === "l"
			? "0%"
			: props.position[1] === "c"
			? "50%"
			: "100%"};
	p {
		margin: 0;
	}
	box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	-webkit-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	-moz-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	transition: 0.2s ease;
	&.active {
		opacity: 1;
		transform: ${(props) =>
			(props.position === "tl" && "translate(0,0)") ||
			(props.position === "tc" && "translate(-50%,0%)") ||
			(props.position === "tr" && "translate(-100%,0)") ||
			(props.position === "bl" && "translate(0,-100%)") ||
			(props.position === "bc" && "translate(-50%,-100%)") ||
			(props.position === "br" && "translate(-100%,-100%)")};
	}
`;
const CloseButton = styled.span`
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
`;
export function Toast(props) {
	if (props.showState === undefined) {
		throw new Error(
			"show parameter is needed and it needs to be a boolean state variable"
		);
	}
	if (props.setShowState === undefined) {
		throw new Error(
			"setShowState parameter is needed and it needs to be the setter function for a boolean state variable"
		);
	}
	useEffect(() => {
		const action = () => {
			props.setShowState(false);
		};
		const timeout = setTimeout(action, props.duration);
		return () => {
			clearTimeout(timeout);
		};
	}, [props.showState]);
	return (
		<ToastStyle
			className={`${props.showState ? "active" : ""}`}
			position={props.position}
			{...props}
		>
			<CloseButton
				onClick={() => {
					props.setShowState(false);
				}}
			>
				<FaRegWindowClose />
			</CloseButton>
			{props.children}
		</ToastStyle>
	);
}

Toast.propTypes = {
	show: PropTypes.bool,
	position: PropTypes.oneOf(["tl", "tc", "tr", "bl", "bc", "br"]),
	duration: PropTypes.number,
};
