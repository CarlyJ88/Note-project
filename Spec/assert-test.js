var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },
  isEqual: function(expected, actual){
    if (expected.toString() !== actual.toString()) {
      throw new Error("Assertion failed: " + expected + " is not equal to " + actual);
    }
  },
  isArrayEqual: function(expected, actual){
    this.isEqual(expected, actual);
  }
};

(function (exports){
  exports.runTest = function(message, testFn){
    var result = document.getElementById("result");
    try{
      testFn();
      result.innerHTML +=message +': passed';
    }
    catch(error){
      result.innerHTML += message +': Falied with error: ' + error;
    } finally{
      result.innerHTML+='<br>';
    }
  }
})(this);