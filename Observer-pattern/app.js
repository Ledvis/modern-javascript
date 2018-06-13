class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    // * Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(item => {
      if (fn !== item) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(fn => fn.call());
  }
}

function getCurrentMilliseconds() {
  console.log(`Current miliseconds: ${new Date().getMilliseconds()}`);
}

function getCurrentSeconds() {
  console.log(`Current miliseconds: ${new Date().getSeconds()}`);
}

const click = new EventObserver;

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrentMilliseconds);
});
  
document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
  click.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});