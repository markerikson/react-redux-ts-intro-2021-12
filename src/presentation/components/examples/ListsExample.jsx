function ListsExample({speakers}) {
  const [shouldSort, setShouldSort] = useState(false);
  const [filter, setFilter] = useState("");

  const onSortClicked = () => {
    setShouldSort(true);
  };

  const onScottsClicked = () => {
    setFilter("Scott");
  };

  const onResetClicked = () => {
    setShouldSort(false);
    setFilter("");
  };

  let speakersToDisplay = speakers;

  if (filter) {
    speakersToDisplay = speakersToDisplay.filter(name => name.startsWith(filter));
  }

  if (shouldSort) {
    speakersToDisplay = speakersToDisplay.slice().sort()
  }


  const speakerListItems = speakersToDisplay.map(speaker => (
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

render(<ListsExample speakers={allSpeakers}/>);
