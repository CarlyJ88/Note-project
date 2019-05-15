(function(exports) {

// add a NoteListView function
// takes NoteList as an argument

function NoteListView(noteList) {
  this.noteList = noteList;
}
// add a method (prototype):
NoteListView.prototype.returnHTMLString = function() {
  return '';
}
// - returns a string of HTML that represents the noteList
// handles array of notes even with no notes inside (write tests for each case)
exports.NoteListView = NoteListView
})(this);