// UI constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td class="delete"><a href="#">❌</a></td>
  `;

  list.appendChild(row);
}

UI.prototype.clearFields = function() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.textContent = message;
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}

UI.prototype.deleteBook = function(target) {
  target.remove();
}