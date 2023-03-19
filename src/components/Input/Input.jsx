import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../constants/colors";
const TempDiv = styled.div`
	position: relative;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	label {
		margin-left: 10px;
		margin-bottom: 5px;
	}
	.placeholder {
		position: absolute;
		top: 50%;
		font-size: 0.9rem;
		color: ${colors.grayDark};
		border-radius: 2px;
		padding: 4px 4px;
		transform: translateY(-50%);
		left: 13px;
		transition: 0.2s ease;
		&.active {
			font-size: 0.7rem;
			top: 0;
		}
	}
`;
const TempInput = styled.input`
	padding: 10px 12px;
	font-size: 1rem;
	outline: none;
	border: 1px solid ${colors.primary}bb;
	border-radius: 2px;
	transition: 0.1s ease;
	&:focus {
		border: 1px solid ${colors.primaryAccent};
	}
`;
export function Input(props) {
	const [text, setText] = useState("");
	const input = useRef(null);
	return (
		<TempDiv>
			{(props.type === "animated" && props.showPlaceholder && (
				<span
					className={`placeholder ${text ? "active" : ""}`}
					style={{ background: props.background, color: props.textColor }}
					onClick={() => {
						input.current.focus();
					}}
				>
					{props.placeholder}
				</span>
			)) ||
				(props.type === "animated" && props.showPlaceholder && (
					<span
						className={`placeholder ${props.text ? "active" : ""}`}
						style={{ background: props.background, color: props.textColor }}
						onClick={() => {
							input.current.focus();
						}}
					>
						{props.name}
					</span>
				))}
			{props.label && props.type === "labeled" && <label>{props.label}</label>}
			<TempInput
				{...props}
				ref={input}
				type={"text"}
				name={props.name}
				style={{ background: props.background, color: props.textColor }}
				onChange={(ev) => {
					setText(ev.target.value);
				}}
				placeholder={
					(["placeholder", "labeled"].includes(props.type) &&
						props.showPlaceholder &&
						props.placeholder) ||
					props.showPlaceholder ||
					props.name
				}
			/>
		</TempDiv>
	);
}

Input.propTypes = {
	placeholder: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	textColor: PropTypes.string,
	showPlaceholder: PropTypes.bool,
	type: PropTypes.oneOf(["labeled", "animated", "placeholder"]),
	background: PropTypes.string,
};
