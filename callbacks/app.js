// function printString(string, callback) {
//   setTimeout(
//     () => {
//       console.log(string);
//       callback();
//     },
//     Math.floor(Math.random() * 100) + 1
//   )
// }

// function printAll() {
//   printString('A', () => {
//     printString('B', () => {
//       printString('C', () => {});
//     })
//   })
// }

// function printString(string) {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () => {
//         console.log(string);
//         resolve();
//       },
//       Math.floor(Math.random() * 100) + 1
//     )
//   })
// }

// async function printAll() {
//   await printString('A');
//   await printString('B');
//   await printString('C');
// }

// printAll();

const posts = [{
    title: 'Post-1'
  },
  {
    title: 'Post-2'
  }
]

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach(post => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'Post-3' }, getPosts);

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let err = true;

      if (!err) {
        resolve();
      } else {
        reject('Oh no! We have got a new error!');
      }
    }, 2000);
  })
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post-3'
})
  .then(getPosts)
  .catch(err => console.log(err));