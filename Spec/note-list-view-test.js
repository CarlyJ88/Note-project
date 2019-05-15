(function (exports) {
  runTest('if there are no notes it returns an empty string', function emptyArray() {
    var noteList = new NoteList;
    var noteListView = new NoteListView(noteList);

    assert.isEqual(noteListView.returnHTMLString(), '');
  });

  runTest('if there is one note it returns a html string containing the note', function oneNoteHTML() {
    var noteList = new NoteList;
    noteList.addNote('Morgan Freeman was here')
    var noteListView = new NoteListView(noteList);

    assert.isEqual(noteListView.returnHTMLString(), '<ul><li><div>Morgan Freeman was here</div></li></ul>');
  });
})(this);
