function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMember(name);
    } else if (type === 'standard') {
      member = new StandardMember(name);
    } else if (type === 'super') {
      member = new SuperMember(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}) costs ${this.cost}`);
    }

    return member;
  }
}

function SimpleMember(name) {
  this.name = name;
  this.cost = '5$';
}

function StandardMember(name) {
  this.name = name;
  this.cost = '15$';
}

function SuperMember(name) {
  this.name = name;
  this.cost = '25$';
}

const members = [];
const factory = new MemberFactory;

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Zhenya', 'super'));
members.push(factory.createMember('Viktor', 'standard'));

members.forEach(member => {
  member.define();
});