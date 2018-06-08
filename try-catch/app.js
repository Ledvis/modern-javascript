const user = { email: 'fedyai.eugen@gmail.com' };

try {
  // * ReferenceErro
  // myFunc();
  // * TypeError
  // null.hello();
  // * SyntaxError
  // eval('Hello + World');
  // * URIError
  // decodeURIComponent('%');
  // * Custom error
  if (!user.name) {
    throw 'User name is not defined';
    // throw new SyntaxError('User name is not defined');
  }
} catch (error) {
  console.log(error);
  console.log(typeof error);
  console.error(error.name);
  console.error(error.message);
  console.log(error instanceof TypeError);
  console.log(error instanceof ReferenceError);
  const message = document.createElement('div');
  message.style = 'color: red';
  message.textContent = error.message;
  document.body.appendChild(message);
} finally {
  // * Runs regardless of result in try and catch blocks
  console.log('I run');
}

console.info('Program continues executing');