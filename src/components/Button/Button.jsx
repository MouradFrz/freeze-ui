import React from "react";
import PropTypes from "prop-types";
import colors from "../../constants/colors";
import styled from "styled-components";
import "../../styles/app.css";
export function Button({
	size,
	outlined,
	type = "primary",
	onClick,
	shadow,
	children,
}) {
	const Button = styled.button`
		box-sizing: border-box;
		font-size: ${size === "sm"
			? "0.8rem"
			: size === "lg"
			? "1.1rem"
			: "0.9rem"};
		padding: ${size === "sm"
			? "6px 14px"
			: size === "lg"
			? "0.6rem 1.1rem"
			: "0.5rem 0.9rem"};
		background-color: ${outlined
			? "transparent "
			: type === "secondary"
			? colors.gray
			: colors.primary};
		font-weight: ${size === "lg" ? "600" : ""};
		border: ${!outlined
			? "none"
			: `2px solid ${type === "primary" ? colors.primary : colors.gray} `};
		border-radius: 1px;
		color: ${type === "primary"
			? outlined
				? colors.primary
				: "white"
			: type === "secondary" && colors.grayDark};
		cursor: pointer;
		transition: background-color 0.2s ease;
		&:hover {
			background-color: ${outlined
				? colors.grayAccent
				: type === "secondary"
				? colors.grayAccent
				: colors.primaryAccent};
		}
		${!shadow
			? ""
			: shadow === "lg"
			? `box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
		-webkit-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);
		-moz-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.65);`
			: shadow === "sm"
			? `box-shadow: 0px 2px 5px -0px rgba(122, 86, 86, 0.25);
		-webkit-box-shadow: 0px 2px 5px -1px rgba(122, 86, 86, 0.25);
		-moz-box-shadow: 0px 2px 5px -1px rgba(122, 86, 86, 0.25);`
			: `box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.25);
		-webkit-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.25);
		-moz-box-shadow: 0px 2px 5px 0px rgba(122, 86, 86, 0.25);`}
	`;
	return <Button onClick={onClick}>{children}</Button>;
}
Button.propTypes = {
	label: PropTypes.string,
	size: PropTypes.oneOf(["sm", "md", "lg"]),
	outlined: PropTypes.bool,
	type: PropTypes.oneOf(["primary", "secondary"]),
	onClick: PropTypes.func,
	shadow: PropTypes.oneOf(["sm", "md", "lg"]),
};
