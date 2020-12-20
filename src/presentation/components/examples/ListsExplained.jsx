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

  // Prefer deriving data while rendering, vs storing derived values
  if (filter) {
    speakersToDisplay = speakersToDisplay.filter(name => name.startsWith(filter));
  }

  const speakerListItems = speakersToDisplay.map(speaker => (
    <li key={speaker}>{speaker}</li>
  ));
}
