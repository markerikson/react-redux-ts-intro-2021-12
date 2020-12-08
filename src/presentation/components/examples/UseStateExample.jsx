function Counter() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      Button was clicked:
      <div>{counter} times</div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

render(<Counter />);
