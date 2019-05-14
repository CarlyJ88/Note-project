(function (exports) {
  function NoteList() {
    this.notes = [];
  };
  
  NoteList.prototype.showListOfNotes = function() {
    return this.notes;
  };

  NoteList.prototype.add = function(heeeellloooo) {
    this.notes.push(heeeellloooo);
  };

  NoteList.prototype.addNote = function(noteText) {
    var note = new Note(noteText);
    this.add(note);
  };

  exports.NoteList = NoteList;
})(this);
