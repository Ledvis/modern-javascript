// * Get from text file
function getText() {
  fetch('text.txt')
    .then(response => {
      return response.text();
    })
    .then(text => {
      document.querySelector('#output').textContent = text;
    })
    .catch(err => console.log(err));
}

document.querySelector('#button1').addEventListener('click', getText);

// * Get from json
function getJson() {
  fetch('post.json')
    .then(response => {
      return response.json();
    })
    .then(arr => {
      let output = '';
      arr.forEach(element => {
        output += `<li>${element.title}</li>`;
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

document.querySelector('#button2').addEventListener('click', getJson);

// * Get from external
function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      let output = '';
      users.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

document.querySelector('#button3').addEventListener('click', getExternal);