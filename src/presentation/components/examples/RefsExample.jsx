function RefsExample() {
  const divRef = useRef();

  const onClick = () => {
    // refObj.current field points to the real DOM node
    if (divRef.current) {
      divRef.current.textContent = "Modified text content";
    }
  };

  return (
    <div>
      <div ref={divRef}>Rendered text content</div>

      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

render(<RefsExample />);
