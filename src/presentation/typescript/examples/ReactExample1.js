interface MyComponentProps {
  a: string;
  b: number;
  c: SomeObject[];
}

function MyComponent({
  a,
  b,
  c
} : MyComponentProps) { // declare type of props
  // Basic state values can be inferred
  const [counter, setCounter] = useState(0);
  // declare complex state types via generics
  const [todos, setTodos] = useState<Todo[] | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  let content: React.ReactNode;

  if (counter > 0) {
    content = <div>Counter {counter}</div>
  }

}