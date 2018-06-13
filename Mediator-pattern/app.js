class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${message} sent ${from.name} to ${this.name}`);
  }
}

const ChatRoom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatRoom = ChatRoom();

chatRoom.register(brad);
chatRoom.register(jeff);
chatRoom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!');