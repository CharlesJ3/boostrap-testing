let todos = [{
  text: 'Clean Room',
  completed: true
}, {
  text: 'Take Trash',
  completed: false
}, {
  text: 'Study',
  completed: false
}];

// 1. Convert array to array of objects
// 2. Create function to remove a todo by text value
// 3. Case-insensitive 

const removeItem = (list, deleteMe) => {
  const index = list.findIndex(function (item) {
    return item.text === deleteMe;
  })

  console.log(index);
  if (index !== -1){
    list.splice(index, 1);
  }

  return list;
}

console.log(removeItem(todos, 'test'));



// const findNote = function (todo, todoTitle) {
//   return todoItem = todo.find(function (todo) {
//     return todo.title.toLowerCase() === todoTitle.toLowerCase();
//   })
// }

// const findNote = function (todo, todoTitle) {
//   const index = todo.findIndex(function (todo) {
//     return todo.title.toLowerCase() === todoTitle.toLowerCase();
//   })

//   return todo[index];
// }

// const note = findNote(todos, 'clean Room')

// console.log(note);