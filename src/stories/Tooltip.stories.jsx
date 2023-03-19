import { Tooltip } from "../components/Tooltip";
import { Button } from "../components/Button";
export default {
	title: "Tooltip",
	component: Tooltip,
};
const Template = (args) => (
	<Tooltip {...args}>
		<Button size={"lg"}>Submit!</Button>
	</Tooltip>
);
export const Default = Template.bind({});
Default.args = {
	text: "Greetings!",
	position: "tr",
	backgroundcolor: "cyan",
	color: "blue",
};
export const Display = (args) => {
	return (
		<div style={{ display: "flex", gap: "10px", padding: "40px" }}>
			<Tooltip position={"tc"} text={"I am a top center tooltip!"}>
				<Button size={"lg"}>Significantly large button</Button>
			</Tooltip>
			<Tooltip position={"bl"} text={"I am a bottom left tooltip!"}>
				<Button size={"lg"}>Significantly large button</Button>
			</Tooltip>
		</div>
	);
};
