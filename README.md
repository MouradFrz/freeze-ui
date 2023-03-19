Freeze-UI
=======
A simple UI component library built with reactjs.

Installation
------------
```bash
npm i freezeui-react
```

Available components
-------
- Alert
- Button
- Checkbox
- Dropdown
- Input
- Modal
- Select
- Switch
- Toast
- Tooltip

Documentation
=======
## Alert
### Props
- background : Can be any valid css color.
### Example
```js
<Alert background="#e84343">
  <p>
    Something went wrong!{' '}
    <a href="#">
      Click here to know more
    </a>
  </p>
</Alert>
```
## Button
### Props
- size : Can be either "sm", "md", or "lg" which stands for small, medium or large.
- shadow : Can be either "sm", "md", or "lg" which stands for small, medium or large.
- outlined : A boolean that determines if the button should be outlined.
- type : Can be either "primary" or "secondary".
### Example
```js
<Button label=""
onClick={() => {console.log("Clicked the button")}}
outlined
shadow="sm"
type="secondary">
Submit</Button>
```
## Checkbox
### Props
- name : The name attribute needed for the checkbox field.
### Example
```js
<Checkbox name="username" />
```
## Dropdown
### Props
- type : Can be either "hover" or "click", determines the event that triggers the dropdown.
- position : Can be either 1,2 or 3. 1 is for right, 2 for center and 3 for left.
- trigger : A jsx element that triggers the dropdown.
### Example
```js
<Dropdown
  position={3}
  trigger={<p>Menu ▼</p>}
  type="hover"
>
  <ul
    style={{
      backgroundColor: '#f3f3f3',
      border: '1px solid #4C217E',
      borderRadius: '4px',
      color: '#3f3f3f',
      listStyle: 'none',
      marginLeft: '300px',
      padding: '10px 0',
      width: '140px'
    }}
  >
    <li>Action 1</li>
    <li>Action 2</li>
    <li>Action 3</li>
  </ul>
</Dropdown>
```
## Input
### Props
- placeholder : The name attribute needed for the checkbox field.
- showPlaceholder : To either show the placeholder or not.
- type : Can be either "animated", "labeled" or "placeholder".
- background : Background color of the input.
- textColor : The color of the text of the input.
- label : A label for when the type is set to "labeled".
- name : A value for the name attribute of the input field.

### Example
```js
<Input
  background="white"
  label="Email"
  name="email"
  placeholder="Email"
  showPlaceholder
  type="animated"
/>
```
## Modal
### Props
- active : A boolean state variable that determines of the modal should be visible or not.
- setActive : The setter function for the state variable.
- onConfirm: A function to execute when confirming.
### Example
```js
const Template = (args) => {
	const [active, setActive] = useState(true);
	return (
		<div>
			<p>Background text</p>
			<Modal
				active={active}
				setActive={setActive}
				onConfirm={() => {
					console.log("confirmed");
				}}
			>
				<p>Are you sure you want to proceed with this action?</p>
			</Modal>
		</div>
	);
};
```
## Select
### Props
- name : The name attribute needed for the select field.
- text : Default text to display when no value is selected.
### Example
```js
<Select name="color">
  <option value="bl">
    Blue
  </option>
  <option value="gr">
    Green
  </option>
  <option value="rd">
    Red
  </option>
</Select>
```
## Switch
### Props
- state : A boolean state variable that determines of the switch should be on or off.
- setState : The setter function for the state variable.
### Example
```js
const Template = () => {
	const [state, setState] = useState(false);
	return <Switch state={state} setState={setState} />;
};
```
## Toast
### Props
- text : The text to be displayed in the toast.
- showState : A boolean state variable that determines of the toast should be on or off.
- setShowState : The setter function for the state variable.
- duration : How long does the toast stay visible in ms.
- position : "tl", "tc", "tr", "bl", "bc", "br" for top left, top center, top right, bottom left, bottom center and bottom right.
### Example
```js
const Template = () => {
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
			<Toast
				position={"tr"}
				duration={4000}
				text={"Greetings"}
				showState={show}
				setShowState={setShow}
			/>
		</div>
	);
};
```
## Tooltip
### Props
- text : The text to be displayed in the tooltip.
- position :"tl","tc","tr","rt","rm","rb","bl","bc","br","lt","lm","lb" meaning TopLeft, TopCenter, TopRight, RightTop, RightMiddle, RightBottom .......
- backgroundcolor : The background color of the tooltip.
- color : The text color of the tooltip.
### Example
```js
<Tooltip text={"Greetings!"} position={"tr"}>
		<Button size={"lg"}>Submit!</Button>
</Tooltip>
```
