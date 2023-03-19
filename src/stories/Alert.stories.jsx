import { Alert } from "../components/Alert";

export default {
	name: "Alert",
	component: Alert,
};
const Template = (args) => (
	<Alert {...args}>
		<p>
			Something went wrong! <a href="#">Click here to know more</a>
		</p>
	</Alert>
);
export const Default = Template.bind({});
Default.args = {};
