(function (exports) {

  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.addNote = function (note) {
    this.noteList.addNote(note)
  }

  NoteController.prototype.getHTML = function () {
    document.getElementById('app').innerHTML = this.noteListView.returnHTMLString();
  }

  exports.NoteController = NoteController


})(this)

