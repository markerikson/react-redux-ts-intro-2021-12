function FriendListItem(props) {
  // What if we want to reuse the "is online" logic?
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

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
