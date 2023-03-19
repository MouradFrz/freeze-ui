import { Checkbox } from "../components/Checkbox";
export default {
	title: "Checkbox",
	component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;
export const Default = Template.bind({});
Default.args = {
	name: "username",
};
export const Display = () => (
	<div style={{ display: "flex", gap: "10px" }}>
		<Checkbox defaultChecked />
		<Checkbox />
	</div>
);
