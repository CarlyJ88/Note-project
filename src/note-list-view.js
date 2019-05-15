(function(exports) {

// add a NoteListView function
// takes NoteList as an argument

function NoteListView(noteList) {
  this.noteList = noteList;
}
// add a method (prototype):
NoteListView.prototype.returnHTMLString = function() {
  var notesArray = this.noteList.showListOfNotes()
  if (notesArray === undefined || notesArray.length === 0) {
    return ''
  }
  var note = notesArray[0].returnText()
  return '<ul><li><div>' + note + '</div></li></ul>';
}
// - returns a string of HTML that represents the noteList
// handles array of notes even with no notes inside (write tests for each case)
exports.NoteListView = NoteListView
})(this);
