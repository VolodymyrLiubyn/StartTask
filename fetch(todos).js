const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'GET',
  });

const todos = await response.json();

for (let donetask of todos) {
  if (donetask.completed) {
    console.log(donetask)
  }
}