(function (exports) {
  runTest('if there are no notes it returns an empty string', function emptyArray() {
    var noteList = new NoteList;
    var noteListView = new NoteListView(noteList);

    assert.isEqual(noteListView.returnHTMLString(), '');
  });
})(this);