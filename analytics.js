const responseusers = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'GET',
  });

const users = await responseusers.json();

const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });

const posts = await response.json();

console.log(users.filter(item => item.id === 1)[0].name);

function nameposts(number) {

let count = 0;

  for (let post of posts) {
    if (post.userId === 1) {
    count++;
    }
  }

console.log(count)

}

nameposts(1)
