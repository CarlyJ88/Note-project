(function(exports) {
  runTest('Initialise text in constructor', 
  function NoteShowsMessage() {
    var note = new Note('My favourite language is Javascript');
    
    assert.isTrue(note.returnText() === "My favourite language is Javascript");
  });
})(this);


// Uses the constructor and prototype pattern to define a note model object that can be instantiated.

// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.

// Stores the text in a text property on the note.
// Has a method that will return the note text.

// Code is wrapped in the module pattern.
