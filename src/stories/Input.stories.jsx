import { Input } from "../components/Input";

export default {
	title: "Input",
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	placeholder: "Email",
	showPlaceholder: true,
	type: "animated",
	background: "white",
	label: "Email",
};
export const Display = () => {
	return (
		<div style={{ display: "flex", gap: "10px" }}>
			<Input type={"animated"} placeholder={"Full name"} showPlaceholder />
			<Input
				type={"labeled"}
				placeholder={"Full name"}
				showPlaceholder
				label={"Full name"}
			/>
			<Input type={"placeholder"} placeholder={"Full name"} showPlaceholder />
		</div>
	);
};
