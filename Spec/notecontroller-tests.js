  // runTest('add a note', function addsANote() {

  //   function NoteListViewDouble(noteList) {
  //     this.noteList = noteList;
  //   }

  //   NoteListViewDouble.prototype.returnHTMLString = function () {
  //     var notesArray = this.noteList.showListOfNotes()
  //     console.log(notesArray);
  //     if (notesArray === undefined || notesArray.length === 0) {
  //       return ''
  //     }

  //     return '<ul><li><div>' + notesArray.join('</div></li><li><div>') + '</div></li></ul>'
  //   }

  //   function NoteControllerDouble(noteList) {
  //     this.note = noteList;
  //   }
  //   var note = new Note("My favourite drink is: rum")
  //   noteList = new NoteListViewDouble(note)
  //   controller = NoteControllerDouble(noteList)
  //   controller.add(note)

  //   assert.isArrayEqual(noteList.showListOfNotes(), 'My favourite drink is: rum');
  // });

// spec:
// controller(noteList)
// + note
// controller.noteListView(noteList)

