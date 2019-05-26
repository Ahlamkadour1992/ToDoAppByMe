const test = require('tape');
const logic = require('../public/logic.js');

test('Testing tape', (t) => {
  t.equal(1, 1, 'Tape is working!');
  t.end();
});
//global variables:
let todosToTest = [
{
 id: 0,
 description: 'smash avocados',
 done: true,
},
{
 id: 1,
 description: 'make coffee',
 done: false,
},
];
let newTodoToTest = [
  {
  id: 2,
  description: 'do sport',
  done: false,
}
];

// test('Testing generateId function', function(t) {
//   let actual = todoFunctions.generateId();
//   let excepted = [{ id: 0 }, { id: 1}, { id: 2 }];
//   t.equal(actual, excepted, 'generateId function is working')
// })

 test('Testing addTodo function', (t) => {
   let actual = logic.addTodo(todosToTest, newTodoToTest);
   let excepted = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
 {
    id: 2,
    description: 'do sport',
    done: false,
  }
];
   t.deepEqual(actual, excepted, 'addTodo function is adding new todo to the todos objects');
   t.end();
 });

 test('Testing deleteTodo function', (t) => {
   let actual = logic.deleteTodo(todosToTest, newTodoToTest);
   let excepted = [
   {
    id: 0,
    description: 'smash avocados',
    done: true,
   },
   {
    id: 1,
    description: 'make coffee',
    done: false,
   },
   ];
   t.deepEqual(actual, excepted, 'deleteTodo function is removing todo from the todos objects');
   t.end();
 });

 test('Testing markTodo function', (t) => {
   let actual = logic.markTodo(todosToTest, 1);
   let excepted = [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: true,
  }
];
   t.deepEqual(actual, excepted, 'markTodo function is change the done from false to true');
   t.end();
 });

// test('Testing sortTodos function', (t) => {
//   let actual = logic.sortTodos(todosToTest);
//   let excepted = [
//  {
//    id: 0,
//    description: 'make coffee',
//    done: true,
//  },
//  {
//    id: 1,
//    description: 'smash avocados',
//    done: true,
//  }
// ];
// t.deepEqual(actual, excepted, 'sortTodos function is sort the todos by alphabetical');
// t.end();
// });
