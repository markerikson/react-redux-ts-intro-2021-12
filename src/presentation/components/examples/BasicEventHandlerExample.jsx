function MyComponent() {
  const handleClick = e => {
    console.log("Clicked: ", e.target.name);
  };

  return (
    <button onClick={handleClick} name="hello">
      Click Me!
    </button>
  );
}
