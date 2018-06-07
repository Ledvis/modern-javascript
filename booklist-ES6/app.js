document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event listeners
document.querySelector('#book-form').addEventListener('submit', function(evt) {
  evt.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();
  if (!title || !author || !isbn) {
    ui.showAlert('Please, fill all the fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert('Congrats, book added', 'success');
    Store.addBook(book);
  }
});

document.querySelector('#book-list').addEventListener('click', function(evt) {
  const ui = new UI();

  if (evt.target.className = 'delete') {
    ui.deleteBook(evt.target.parentNode.parentNode);
    ui.showAlert('Book removed', 'success');
    Store.removeBook(event.target.parentNode.previousElementSibling.textContent);
  }
});