import { Dropdown } from "../components/Dropdown";
import colors from "../constants/colors";
export default {
	name: "Dropdown",
	component: Dropdown,
};

const Template = (args) => {
	return (
		<Dropdown
			{...args}
			trigger={<p style={{ marginLeft: "300px" }}>Menu &#x25BC;</p>}
		>
			<ul
				style={{
					backgroundColor: colors.lightGray,
					padding: "10px 0",
					marginLeft: "300px",
					listStyle: "none",
					color: colors.grayDark,
					borderRadius: "4px",
					border: `1px solid ${colors.primaryAccent}`,
					width: "140px",
				}}
			>
				<li style={{ padding: "12px 20px", cursor: "pointer" }}>Action 1</li>
				<li style={{ padding: "12px 20px", cursor: "pointer" }}>Action 2</li>
				<li style={{ padding: "12px 20px", cursor: "pointer" }}>Action 3</li>
			</ul>
		</Dropdown>
	);
};
export const Default = Template.bind({});

Default.args = { type: "hover", position: 1 };
