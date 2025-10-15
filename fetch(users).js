const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });

const users = await response.json();

console.log(users);
console.table(users);

console.log(users.length);

for (let user of users) {
  console.log(user.name)
}

function showUsers(number) {
  for (let i = 1; i <= number; i++) {
    console.log(users[i - 1])
  }
}

showUsers(4);

function findName(username) {
  for (let firstname of users) {
    if (firstname.name.includes(username)) {
      console.log(firstname)
    }
  }
}

findName('Glenna');

