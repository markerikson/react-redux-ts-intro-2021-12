// My basic render function structure:
function RenderLogicExample({
  someBoolean, // 1) Destructure values from `props` object
  someList,
}) {
  // 2) Declare state values
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  // 3) Render any dependent items into temporary variables,
  //    such as conditional components or lists
  const conditionalComponent = someBoolean ? (
    <SomeConditionalComponent />
  ) : null;
  const listItems = someList.map(item => (
    <ListItem key={item.id} item={item} />
  ));

  // 4) Use a single JSX structure, with the temporary
  //    variables in the correct spots.
  //    I prefer to avoid logic inline in my JSX.
  return (
    <div>
      <div>
        A: {a}, B: {b}
      </div>
      {conditionalComponent}
      {listItems}
    </div>
  );
}
