import { Select } from "../components/Select";
export default {
	name: "Select",
	component: Select,
};

const Template = (args) => (
	<Select name="color" {...args}>
		<option value="bl">Blue</option>
		<option value="gr">Green</option>
		<option value="rd">Red</option>
	</Select>
);
export const Default = Template.bind({});

Default.args = {};
