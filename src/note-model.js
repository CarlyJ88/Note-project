(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.returnText = function() {
    return this.text;
  };

  Note.prototype.toString = function() {
    return this.text;
  }
  
  exports.Note = Note;
}) (this);