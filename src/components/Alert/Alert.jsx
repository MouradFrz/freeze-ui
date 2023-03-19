import React, { useRef } from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import colors from "../../constants/colors";
import PropTypes from "prop-types";
const Div = styled.div`
	background-color: ${(props) =>
		props.background ? props.background + "80" : colors.primary + "cc"};
	padding: 16px;
	border: 6px solid
		${(props) => (props.background ? props.background : colors.primary)};
	border-radius: 4px;
	position: relative;
	box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	-webkit-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	-moz-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
	&.hide {
		display: none;
	}
	button {
		color: ${(props) => props.color};
	}
`;
export function Alert(props) {
	const div = useRef(null);
	return (
		<Div ref={div} background={props.background}>
			{props.children}
			<button
				style={{
					display: "block",
					background: "transparent",
					border: "none",
					position: "absolute",
					top: "14px",
					right: "10px",
					cursor: "pointer",
					fontSize: "1.4rem",
				}}
				onClick={() => {
					div.current.classList.add("hide");
				}}
			>
				<VscClose />
			</button>
		</Div>
	);
}

Alert.propTypes = {
	background: PropTypes.string,
};
