function getJokes(evt) {
  evt.preventDefault();
  const number = document.querySelector('input').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number || 1}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';

      if (response.type === 'success') {
        response.value.forEach(element => {
          output += `<li>${element.joke}</li>`;
        });
      } else {
        output += `<li>Someting went wrong</li>`;
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();
}

document.querySelector('button').addEventListener('click', getJokes);