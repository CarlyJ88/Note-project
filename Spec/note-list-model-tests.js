

(function(exports) {
  function initialseNoteListWithEmptyArray() {
    var noteList = new NoteList();
  };

var result = document.getElementById("result");

try {
  initialseNoteListWithEmptyArray();

  result.innerHTML += 'Yay!!!!!!!!!!!!! You did it! :D <br>';
}
catch (error) {

  result.innerHTML += error + '<br>';
  console.error(error);
}
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