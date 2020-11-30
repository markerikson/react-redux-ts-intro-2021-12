function NoteBox() {
  // ... more code ...
  return (
    <div className="NoteBox">
      <h1>Notes</h1>
      <NoteList data={this.state.data} />
      <NoteForm onPost={this.handlePost} />
    </div>
  )
}
