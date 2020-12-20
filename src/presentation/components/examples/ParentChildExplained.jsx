const SpeakerListItem = ({ speaker, selected, onClick }) => {
  // Child uses callback from parent
  const itemOnClick = () => onClick(speaker);

  // Callback used to notify parent
  return <li onClick={itemOnClick}>{content}</li>;
};

function ListSelectionExample({speakers}) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Parent creates callback that queues state update
  const onSpeakerClicked = speaker => {
    setSelectedSpeaker(speaker);
  };

  // Omit derived filtered/sorted values
  let speakersToDisplay = speakers;
  
  const speakerListItems = speakersToDisplay.map(speaker => (
    // Values and callbacks passed to child as props
    <SpeakerListItem
      key={speaker}
      speaker={speaker}
      selected={speaker === selectedSpeaker}
      onClick={onSpeakerClicked}
    />
  ));
}
