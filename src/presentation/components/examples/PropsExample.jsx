function HelloWorld(props) {
  return <div>Hello {props.name}</div>;
}

render(<HelloWorld name="Mark" />);
