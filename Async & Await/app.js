async function getUsers(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users));