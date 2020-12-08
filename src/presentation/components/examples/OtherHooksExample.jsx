function OtherHooksExample(props) {
  const divRef = useRef();
  const counterRef = useRefo(0);

  useLayoutEffect(() => {
    console.log("Div width: ", divRef.current.width);
  }, [props.value]);

  useLayoutEffect(() => {
    renderCounterRef.current += 1;
    console.log(`Rendered ${counterRef.current} times!`);
  });

  const data = useMemo(() => {
    return calculateExpensiveData(props.value);
  }, [props.value]);

  const callback = useCallback(() => {
    console.log("Clicked!");
  }, [props.value]);

  return (
    <div ref={divRef}>
      <ChildComponent onClick={callback} data={data} />
    </div>
  );
}
