function Counters() {
  // Multiple calls to useState in one component
  const [timesClicked, setTimesClicked] = useState(0);
  const [counters, setCounters] = useState({ a: 0, b: 0 });

  const handleClick = name => () => {
    setTimesClicked(timesClicked + 1);
    // Must create the new object value, immutably
    setCounters({
      ...counters,
      [name]: counters[name] + 1,
    });
  };

  return (
    <div>
      Button was clicked:
      <div>{timesClicked} times</div>
      <button onClick={handleClick("a")}>Button A ({counters.a})</button>
      <button onClick={handleClick("b")}>Button B ({counters.b})</button>
    </div>
  );
}
