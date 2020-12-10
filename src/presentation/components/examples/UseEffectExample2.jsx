function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  const friendId = props.friend.id;
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    FriendsAPI.subscribe(friendId, handleStatusChange);

    // Effect hook callbacks can return a cleanup function
    return () => {
      FriendsAPI.unsubscribe(friendId, handleStatusChange);
    };

    // Optional dependencies array:
    // only runs callback when deps values change
    // Think of this as "syncing effects to state"
  }, [friendId]);

  // omit rendering
}
