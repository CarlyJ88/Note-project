runTest('controller can be instantiated', function instantiateController() {

  var noteList = new NoteList()
  var controller = new NoteController(noteList)

});

runTest('gets HTML from noteListView', function getHTML() {

  var noteList = new NoteList()
  var controller = new NoteController(noteList)
  controller.addNote('My favourite drink is: rum')
  controller.getHTML()
  document.getElementById('app').innerHTML

  assert.isArrayEqual(document.getElementById('app').innerHTML, '<ul><li><div>My favourite drink is: rum</div></li></ul>')
})
