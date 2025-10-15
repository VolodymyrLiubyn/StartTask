const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });

const posts = await response.json();

function showTitle(number) {
  for (let j = 1; j <= number; j++) {
    if (j <= number) {
      console.log(posts[j - 1].title)
    }
  }
}

showTitle(5);

function showUserPosts(usId) {
  for (let post of posts) {
    if (usId === post.userId) {
      console.log(post.body)
    }
  }
}

showUserPosts(1);

