var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

function noteShowsMessage() {
  var note = new Note();
  assert.isTrue(note.returnText() === "My favourite language is Javascript");
};

// var result = document.getElementById("result");

// try {
//   noteShowsMessage();

//   result.innerHTML = 'Yay!!!!!!!!!!!!! You did it! :D';
// }
// catch (error) {

//   result.innerHTML = error;
//   console.error(error);
// }

// Uses the constructor and prototype pattern to define a note model object that can be instantiated.

// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.

// Stores the text in a text property on the note.
// Has a method that will return the note text.

// Code is wrapped in the module pattern.

// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5

//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   };

//   exports.exclaim = exclaim;
// })(this);

