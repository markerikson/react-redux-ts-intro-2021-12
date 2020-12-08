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

function ListSelectionExample() {
  const [speakers, setSpeakers] = useState(allSpeakers);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // omit event handlers

  const speakerListItems = speakers.map(speaker => (
    <SpeakerListItem
      key={speaker}
      speaker={speaker}
      selected={speaker === selectedSpeaker}
      onClick={onSpeakerClicked}
    />
  ));

  // return output
}
