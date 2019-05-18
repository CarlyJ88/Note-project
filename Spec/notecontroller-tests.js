  runTest('add a note', function addsANote() {

    function NoteListDouble() {
      this.notes = [];
    };
    
    NoteListDouble.prototype.showListOfNotes = function() {
      return this.notes;
    };

    function NoteListViewDouble(noteList) {
      this.noteList = noteList;
    }

    NoteListViewDouble.prototype.returnHTMLString = function () {
      var notesArray = this.noteList.showListOfNotes()
      console.log(notesArray);
      if (notesArray === undefined || notesArray.length === 0) {
        return ''
      }

      return '<ul><li><div>' + notesArray.join('</div></li><li><div>') + '</div></li></ul>'
    }

    var note = new Note("My favourite drink is: rum")
    noteListView = new NoteListViewDouble(note)
    noteList = new NoteListDouble
    controller = new NoteController(noteList)
    controller.add(note)

    console.log(noteList.showListOfNotes())

    assert.isArrayEqual(noteList.showListOfNotes(), 'My favourite drink is: rum');

  });

// spec:
// controller(noteList)
// + note
// controller.noteListView(noteList)

