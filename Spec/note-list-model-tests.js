(function (exports) {
  runTest('Initialize Note with empty Array', function initialseNoteListWithEmptyArray() {
    var noteList = new NoteList();

    assert.isArrayEqual(noteList.showListOfNotes(), []);
  });

  runTest('Add a Note to the Array', function addNoteToNoteList() {

    var note = new Note("My favourite language is Javascript");
    var noteList = new NoteList();
    noteList.add(note);

    assert.isArrayEqual(noteList.showListOfNotes(), [note]);
  });
})(this);

// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note list model object that can be instantiated.
// Stores an array of note models.
// Has a method that will return all the note models stored in the array.
// Has a method that creates and stores a new single note model. 
// This function takes as an argument a string that will be the value of the text property of the note e.g. "Favourite drink: seltzer".

// create a note list model object
// store an array of note models
// returnNoteModels prototype
// createNoteModel prototype