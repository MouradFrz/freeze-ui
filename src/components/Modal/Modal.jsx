import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../Button";
const Wrapper = styled.div`
	backdrop-filter: blur(1px);
	background-color: #80808023;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -100;
	opacity: 0;
	display: flex;
	transition: 0.4s ease;
	&.show {
		z-index: 100;
		opacity: 1;
	}
`;
const Box = styled.div`
	transition: 0.4s ease;
	&.show {
		z-index: 100;
		opacity: 1;
		transform: translate(-50%, -50%);
		.cover {
			display: none;
		}
	}
	z-index: -100;
	position: relative;
	position: absolute;
	opacity: 0;
	width: 400px;
	max-width: 80%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -65%);
	background-color: white;
	padding: 5px 10px;
	border-radius: 4px;
	box-shadow: 0px 2px 5px -0px rgba(122, 86, 86, 0.25);
	-webkit-box-shadow: 0px 2px 5px -1px rgba(122, 86, 86, 0.25);
	-moz-box-shadow: 0px 2px 5px -1px rgba(122, 86, 86, 0.25);
	.cover {
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: transparent;
	}
	.bottom-bar {
		padding: 5px;
		display: flex;
		gap: 10px;
		button {
			flex-grow: 1;
		}
	}
	.content {
		padding: 0px 10px;
	}
`;
export function Modal(props) {
	const [active, setActive] = useState(true);
	return (
		<Wrapper
			className={active && "show"}
			onClick={() => {
				setActive(false);
			}}
		>
			<Box
				className={active && "show"}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="cover"></div>
				<div className="content">{props.children}</div>
				<div className="bottom-bar">
					<Button
						type="secondary"
						onClick={() => {
							setActive(false);
						}}
					>
						Decline
					</Button>
					<Button>Confirm</Button>
				</div>
			</Box>
		</Wrapper>
	);
}

Modal.propTypes = {
	position: PropTypes.string,
};
