// ES6 arrow function - either function syntax is fine
const SpeakerListItem = ({ speaker, selected, onClick }) => {
  const itemOnClick = () => onClick(speaker);

  let content = speaker;

  if (selected) {
    content = (
      <b>
        <i>{speaker}</i>
      </b>
    );
  }

  return <li onClick={itemOnClick}>{content}</li>;
};

function ListSelectionExample({speakers}) {
  const [shouldSort, setShouldSort] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const onSpeakerClicked = speaker => {
    setSelectedSpeaker(speaker);
  };

  const onSortClicked = () => {
    setShouldSort(true);
  };

  const onScottsClicked = () => {
    setFilter("Scott");
  };

  const onResetClicked = () => {
    setShouldSort(false);
    setFilter("");
    setSelectedSpeaker(null);
  };

  let speakersToDisplay = speakers;

  if (filter) {
    speakersToDisplay = speakersToDisplay.filter(name => name.startsWith(filter));
  }

  if (shouldSort) {
    speakersToDisplay = speakersToDisplay.slice().sort()
  }

  const speakerListItems = speakersToDisplay.map(speaker => (
    <SpeakerListItem
      key={speaker}
      speaker={speaker}
      selected={speaker === selectedSpeaker}
      onClick={onSpeakerClicked}
    />
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

render(<ListSelectionExample speakers={allSpeakers}/>);
