// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    // { id: -3, description: 'first todo' },
    // { id: -2, description: 'second todo' },
    // { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    console.log(todoNode);
    // you will need to use addEventListener
var span = document.createElement('span');
var newTodo = todoFunctions.addTodo(state, todo.description);
console.log(newTodo);
var text = document.createTextNode(todo.description);
console.log(text);
span.appendChild(text);
todoNode.appendChild(span);
    // add span holding description
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var deleteText = document.createTextNode("Delete");
        deleteButtonNode.appendChild(deleteText);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
event.preventDefault();
      var description = event.target.firstElementChild.value; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, {description:description}); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
