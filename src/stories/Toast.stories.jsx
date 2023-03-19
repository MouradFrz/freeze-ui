import { useState } from "react";
import { Toast } from "../components/Toast";

export default {
	name: "Toast",
	component: Toast,
};

const Template = (args) => {
	const [show, setShow] = useState(true);
	return (
		<div>
			<button
				onClick={() => {
					setShow(true);
				}}
			>
				Show
			</button>
			<Toast {...args} showState={show} setShowState={setShow}>
				<p>{args.text}</p>
			</Toast>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	mode: "base",
	text: "Hello bro",
	show: false,
	duration: 1000,
	position: "tr",
};
