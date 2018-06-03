const http = new EasyHTTP;

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get single posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create data
const data = {
  "title": "Responsive (styles for mobile devices are to be determined by developer)",
  "body": "If browser or framework doesn't support PUT/DELETE requests, then they can be emulated with POST request and additional parameter"
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });