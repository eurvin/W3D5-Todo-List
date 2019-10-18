

async function getCurrentTodos() {
  return await apiTodo('GET', '', '').then(data => {
    let todoLijst = data.todos;
     console.log(todoLijst);
    let todos = Object.keys(todoLijst);

    todos.forEach(todo => {
      console.log(todo);
       let container = document.querySelector(".taskContainer");
       const todoContainer = document.createElement('div')
       todoContainer.id = todo;
       console.log(todoContainer.id);

       return container;
    });
  });
}

async function postTodo(todo) {

  return await apiTodo('POST', '/todos', todo).then(data => {
    let container = document.querySelector(".taskContainer");
    return container
  });
};

// add eventlistener for button
document.getElementById('addButton').addEventListener('click', function() {
    const todo = document.getElementById('inputTodo').value;
    console.log(todo);
    postTodo(todo);
});

// run script when all dom content is loaded.
document.addEventListener('DOMContentLoaded', function(event) {
    getCurrentTodos();
});
