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

  exports.NoteList = NoteList;
})(this);
