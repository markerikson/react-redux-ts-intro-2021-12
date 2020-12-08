function ListsExample() {
  const [speakers, setSpeakers] = useState(allSpeakers);

  const onSortClicked = () => {
    const sortedSpeakers = speakers.slice().sort();
    setSpeakers(sortedSpeakers);
  };

  const onScottsClicked = () => {
    const onlyScotts = speakers.filter(name => name.startsWith("Scott"));
    setSpeakers(onlyScotts);
  };

  const onResetClicked = () => {
    setSpeakers(allSpeakers);
  };

  const speakerListItems = speakers.map(speaker => (
    <li key={speaker}>{speaker}</li>
  ));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={onSortClicked}>Sort List</button>
        <button onClick={onScottsClicked}>Scotts Only</button>
        <button onClick={onResetClicked}>Reset List</button>
      </div>

      <ul>{speakerListItems}</ul>
    </div>
  );
}

const allSpeakers = [
  "Scott Hanselman",
  "John Papa",
  "Scott Guthrie",
  "Dan Wahlin",
  "Debora Kurata",
  "Zoiner Tejada",
  "Scott Allen",
  "Elijah Manor",
  "Ward Bell",
  "Todd Anglin",
  "Saron Yitbare",
  "Scott Hunter",
];

render(<ListsExample />);
