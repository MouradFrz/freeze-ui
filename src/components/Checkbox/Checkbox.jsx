import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../constants/colors";
const Box = styled.span`
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 2px solid ${colors.primary};
	border-radius: 2px;
	position: relative;
	transition: 0.3s ease;
	background-color: ${colors.gray};
	&::before {
		content: "";
		background-color: white;
		width: 2px;
		height: 65%;
		border-radius: 5px;
		position: absolute;
		top: calc(100% - 80%);
		left: calc(100% - 45%);
		transform: rotate(45deg);
		display: block;
		transition: 0.3s ease;
		opacity: 0;
	}
	&::after {
		content: "";
		background-color: white;
		width: 2px;
		height: 35%;
		border-radius: 5px;
		position: absolute;
		top: calc(100% - 56%);
		left: calc(100% - 75%);
		transform: rotate(130deg);
		display: block;
		opacity: 0;
		transition: 0.3s ease;
	}
	&.active {
		background-color: ${colors.primary};
		&::before {
			opacity: 1;
		}
		&::after {
			opacity: 1;
		}
	}
`;
export function Checkbox(props) {
	const hideInput = {
		zIndex: -50,
		opacity: 0,
		position: "absolute",
	};
	const inputRef = useRef(null);
	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive((prev) => !prev);
	}, [inputRef]);
	return (
		<div
			style={{ position: "relative", cursor: "pointer" }}
			onClick={() => {
				if (inputRef.current) {
					inputRef.current.checked = !inputRef.current.checked;
					console.log(inputRef.current.checked);
					setActive((prev) => !prev);
				}
			}}
		>
			<Box className={`${inputRef.current?.checked && "active"}`}></Box>
			<input type="checkbox" style={hideInput} ref={inputRef} {...props} />
		</div>
	);
}
Checkbox.propTypes = {
	name: PropTypes.string,
};
