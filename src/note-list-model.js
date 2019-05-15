(function (exports) {
  function NoteList() {
    this.notes = [];
  };
  
  NoteList.prototype.showListOfNotes = function() {
    return this.notes;
  };

  NoteList.prototype.add = function(note) {
    this.notes.push(note);
  };

  NoteList.prototype.addNote = function(noteText) {
    var note = new Note(noteText);
    this.add(note);
  };

  exports.NoteList = NoteList;
})(this);
