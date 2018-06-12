// * Standard module pattern
const UICtrl = (function() {
  const text = 'Hello, World!';

  function changeText() {
    document.querySelector('h1').textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
    }
  }
})();

UICtrl.callChangeText();

// * Revealing module pattern
const itemCtrl = (function() {
  const data = [];

  function add(item) {
    data.push(item);
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add,
    get
  }
})();

itemCtrl.add({id: 27, name: 'Zhenya'});
itemCtrl.add({id: 28, name: 'Viktor'});
console.log(itemCtrl.get(28));
