function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // Effect hook callbacks can return a cleanup function
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };

    // Optional dependencies array:
    // only runs callback when deps values change
    // Think of this as "syncing effects to state"
  }, [props.friend.id]);

  // omit rendering
}
