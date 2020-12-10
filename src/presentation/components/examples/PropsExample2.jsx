function HelloWorld(props) {
  return <div>Hello {props.name}</div>;
}

function Parent1() {
  return <HelloWorld name="Mark" />;
}

function KitchenSinkParent() {
  return (
    <KitchenSinkChild
      a={1}
      b="some text"
      c={{ meaningOfLife: 42 }}
      d={[2, 3, 4, 5]}
      e={<SomeOtherComponent />}
      f={AnotherComponent}
      g={() => {
        console.log("Clicked!");
      }}
    />
  );
}
