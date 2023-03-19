import { useState } from "react";
import { Switch } from "../components/Switch";
export default {
	name: "Switch",
	component: Switch,
};

const Template = (args) => {
	const [state, setState] = useState(false);
	return <Switch {...args} state={state} setState={setState} />;
};
export const Default = Template.bind({});
Default.args = {};
