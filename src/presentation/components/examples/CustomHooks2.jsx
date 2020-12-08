// "Custom hook": extracted function starting with "use"
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function statusChanged(status) {
      setIsOnline(status.isOnline);
    }

    FriendsAPI.subscribe(props.friend.id, statusChanged);

    return () => {
      FriendsAPI.subscribe(props.friend.id, statusChanged);
    };
  });

  return isOnline;
}

function FriendsList(props) {
  const isOnline = useFriendStatus(props.friend.id);
  // etc
}

function FriendsListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  // etc
}
