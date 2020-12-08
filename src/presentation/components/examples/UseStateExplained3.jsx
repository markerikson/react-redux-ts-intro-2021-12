function Counter() {
  const [counter, setCounter] = useState(0);

  const onClickBuggy = () => {
    // ❌ Two bugs here!
    // 1) "Closed over" old value of `counter`
    // 2) Updates will be batched together
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const onClickFixed = () => {
    // ✅ Can pass an "updater" function to setState,
    // which gets the latest value as its argument
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <div>
      Button was clicked:
      <div>{counter} times</div>
      <button onClick={onClickFixed}>Click Me</button>
    </div>
  );
}
