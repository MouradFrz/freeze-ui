import React, { useRef, useState } from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
const ShowedContent = styled.div`
	button {
		width: 100%;
		text-align: left;
		background-color: transparent;
		border: 1px solid ${colors.primary};
		cursor: pointer;
		padding: 10px 6px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}
	div {
		border: 1px solid ${colors.primary};
		border-top: none;
		clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
		transition: 0.2s ease;
		li {
			padding: 10px 6px;
			cursor: pointer;
			&.selected {
				color: ${colors.primary};
			}
			&:hover {
				background-color: ${colors.grayAccent};
			}
		}
		&.active {
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		}
	}
`;
export function Select(props) {
	const [r, rerender] = useState(false);
	const content = useRef(null);
	const select = useRef(null);
	return (
		<div>
			<div
				style={{
					position: "absolute",
					clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
					overflow: "hidden",
				}}
			>
				<select name={props.name} id="" ref={select}>
					{props.children}
				</select>
			</div>
			<ShowedContent
				style={{ width: "160px" }}
				className="showed-content-wrapper"
			>
				<button
					onFocus={() => {
						content.current.classList.add("active");
					}}
					onBlur={(e) => {
						if (!document.querySelector(".showed-content-wrapper:hover")) {
							content.current.classList.remove("active");
						} else {
							e.target.focus();
						}
					}}
				>
					{select.current?.options[select.current.selectedIndex].text ||
						props.title ||
						"Choose a value"}
				</button>
				<div className="content" ref={content}>
					<ul style={{ margin: 0, padding: 0 }}>
						{props.children.map((e, i) => {
							return (
								<li
									key={i}
									onClick={() => {
										select.current.value = e.props.value;
										rerender((p) => !p);
									}}
									className={`${
										select.current?.value === e.props.value && "selected"
									}`}
								>
									{e.props.children}
								</li>
							);
						})}
					</ul>
				</div>
			</ShowedContent>
		</div>
	);
}

