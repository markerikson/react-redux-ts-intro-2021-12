function NoteBox() {
  const [data, setData] = useState([]);

  const handlePost = () => {};

  return (
    <div className="NoteBox">
      <h1>Notes</h1>
      <NoteList data={data} />
      <NoteForm onPost={handlePost} />
    </div>
  );
}
