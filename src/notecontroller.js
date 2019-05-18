(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
  }
  
  NoteController.prototype.add = function(note) {
    this.noteList.notes.push(note);
  }
  
  exports.NoteController = NoteController
  
  
  })(this)
  
// console.log(document.getElementById('app').innerHTML = "howdy");
