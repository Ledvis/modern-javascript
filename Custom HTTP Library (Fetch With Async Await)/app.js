const http = new EasyHTTP;

// * Get users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.error(err));

const user = {
  name: "Vitya Gniliansky",
  phone: "098 826 45 93",
  username: "gniliansly",
  website: "gniliansly.org"
};

// * Post user
// http
//   .post('https://jsonplaceholder.typicode.com/users', user)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// * Update user
// http
//   .put('https://jsonplaceholder.typicode.com/users/1', user)
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// * Delete user
// http
//   .delete('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => console.log(response))
//   .catch(err => console.error(err));