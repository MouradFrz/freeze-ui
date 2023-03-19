import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
export default {
	name: "Modal",
	component: Modal,
};

const Template = (args) => (
	<div>
		<p>Background text</p>
		<Modal {...args}>
			<form action="" style={{ padding: "20px" }}>
				<div style={{ marginBottom: "10px" }}>
					<Input
						placeholder={"First name"}
						showPlaceholder
						type={"animated"}
						background="white"
					/>
				</div>
				<div style={{ marginBottom: "10px" }}>
					<Input
						placeholder={"Last name"}
						showPlaceholder
						type={"animated"}
						background="white"
					/>
				</div>
				<div style={{ marginBottom: "10px" }}>
					<Input
						placeholder={"Email"}
						showPlaceholder
						type={"animated"}
						background="white"
					/>
				</div>
				<div style={{ marginBottom: "10px" }}>
					<Input
						placeholder={"Password	"}
						showPlaceholder
						type={"animated"}
						background="white"
					/>
				</div>
			</form>
		</Modal>
	</div>
);
export const Default = Template.bind({});
Default.args = {
	position: "center",
};
