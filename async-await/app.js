async function getData() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();
  return users;
}

getData().then(response => console.log(response));