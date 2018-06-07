// UI constructor
class UI {
  constructor() {}
  addBookToList(book) {
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
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  showAlert(message, className) {
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
  deleteBook(target) {
    target.remove();
  }
}