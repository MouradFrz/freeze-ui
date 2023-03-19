import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Wrapper = styled.div`
	position: relative;
	width: fit-content;
	&:hover {
		div {
			opacity: ${({ type }) => type === "hover" && 1};
			left: ${({ position }) =>
				(position === 1 && "0") ||
				(position === 2 && "50%") ||
				(position === 3 && "100%")};
			z-index: 1000;
			transform: ${({ position, type }) =>
				(type === "hover" && position === 1 && "translate(0,0)") ||
				(type === "hover" && position === 2 && "translate(-50%,0)") ||
				(type === "hover" && position === 3 && "translate(-100%,0)")};
		}
	}
`;
const Drop = styled.div`
	opacity: 0;
	z-index: -1000;
	position: absolute;
	left: -9000px;
	transition: opacity 0.2s linear, transform 0.2s ease;
	transform: ${({ position }) =>
		(position === 1 && "translate(0,-10%)") ||
		(position === 2 && "translate(-50%,-10%)") ||
		(position === 3 && "translate(-100%,-10%)")};
	&.active {
		opacity: 1;
		left: ${(props) =>
			(props.position === 1 && "0") ||
			(props.position === 2 && "50%") ||
			(props.position === 3 && "100%")};
		z-index: 0;
		transform: ${(props) =>
			(props.position === 1 && "translate(0,0)") ||
			(props.position === 2 && "translate(-50%,0)") ||
			(props.position === 3 && "translate(-100%,0)")};
		&:hover {
			opacity: 1;
			left: ${(props) =>
				(props.position === 1 && "0") ||
				(props.position === 2 && "50%") ||
				(props.position === 3 && "100%")};
			z-index: 0;
			transform: ${(props) =>
				(props.position === 1 && "translate(0,0)") ||
				(props.position === 2 && "translate(-50%,0)") ||
				(props.position === 3 && "translate(-100%,0)")};
		}
	}
`;
export function Dropdown(props) {
	const dropdown = useRef(null);
	const button = useRef(null);
	return (
		<Wrapper
			type={props.type}
			onClick={(ev) => {
				ev.preventDefault();
				if (button.current) {
					button.current.focus();
				}
			}}
			className={"wrapper"}
			position={props.position}
		>
			{props.trigger}
			<Drop ref={dropdown} position={props.position}>
				{props.children}
			</Drop>
			{props.type === "click" && (
				<button
					ref={button}
					onFocus={() => {
						dropdown.current.classList.add("active");
					}}
					onBlur={() => {
						if (!document.querySelector(".wrapper:hover")) {
							dropdown.current.classList.remove("active");
						}
					}}
					style={{ opacity: 0, position: "relative", top: -4000 }}
				></button>
			)}
		</Wrapper>
	);
}

Dropdown.propTypes = {
	type: PropTypes.oneOf(["click", "hover"]),
	position: PropTypes.oneOf([1, 2, 3]),
	trigger: PropTypes.element,
};
