// Before
const MyComponent = (props) => (
    <div>Hello World!</div>
);

ReactDOM.render(
    <MyComponent />,
    document.getElementById("root")
);

//After
const MyComponent = (props) => (
    React.createElement("div", null, "Hello World")
);

ReactDOM.render(
    React.createElement(MyComponent),
    document.getElementById("root")
);