import { Button } from "../components/Button";

export default {
	title: "Button",
	component: Button,
};
const Template = (args) => <Button {...args}>Submit</Button>;
export const Default = Template.bind({});
export const Outlined = () => (
	<div style={{ display: "flex", gap: "10px" }}>
		<Button>Primary</Button>
		<Button type="secondary">Secondary</Button>
		<Button outlined>Outlined</Button>
		<Button label="" onClick={() => {}} outlined shadow="sm" type="secondary">
			Secondary Outlined
		</Button>
	</div>
);
