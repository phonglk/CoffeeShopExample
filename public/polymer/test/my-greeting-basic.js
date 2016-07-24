'use strict';

suite('my-greeting tests', function () {
  var greeting, header;

  setup(function () {
    greeting = fixture('basic');
  });

  test('Welcome!', function () {
    header = greeting.$$('h1');
    assert.equal(header.textContent, 'Welcome!');
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbXktZ3JlZXRpbmctYmFzaWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLG1CQUFOLEVBQTJCLFlBQVc7QUFDaEMsTUFBSSxRQUFKLEVBQWMsTUFBZDs7QUFFQSxRQUFNLFlBQVc7QUFDZixlQUFXLFFBQVEsT0FBUixDQUFYO0FBQ0QsR0FGRDs7QUFJQSxPQUFLLFVBQUwsRUFBaUIsWUFBVztBQUMxQixhQUFTLFNBQVMsRUFBVCxDQUFZLElBQVosQ0FBVDtBQUNBLFdBQU8sS0FBUCxDQUFhLE9BQU8sV0FBcEIsRUFBaUMsVUFBakM7QUFDRCxHQUhEO0FBS0QsQ0FaTCIsImZpbGUiOiJ0ZXN0L215LWdyZWV0aW5nLWJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsic3VpdGUoJ215LWdyZWV0aW5nIHRlc3RzJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZ3JlZXRpbmcsIGhlYWRlcjtcblxuICAgICAgc2V0dXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGdyZWV0aW5nID0gZml4dHVyZSgnYmFzaWMnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0ZXN0KCdXZWxjb21lIScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBoZWFkZXIgPSBncmVldGluZy4kJCgnaDEnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGhlYWRlci50ZXh0Q29udGVudCwgJ1dlbGNvbWUhJyk7XG4gICAgICB9KTtcblxuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==