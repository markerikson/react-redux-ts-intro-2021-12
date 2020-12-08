function EffectExample() {
  const [count, setCount] = useState(0);

  // The useEffect hook takes a callback function,
  // which may contain side effects
  useEffect(() => {
    // Updating the document title is a side effect
    // (updating the mutable contents of the page)
    // Can reference a captured variable inside here
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
