function homeState() {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
}

function aboutState() {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
}

function contactState() {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
}

class PageState {
  constructor() {}

  init() {
    homeState();
  };
}

const page = new PageState;
page.init();

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

home.addEventListener('click', e => {
  e.preventDefault();

  homeState();
});

about.addEventListener('click', e => {
  e.preventDefault();

  aboutState();
});

contact.addEventListener('click', e => {
  e.preventDefault();

  contactState();
});