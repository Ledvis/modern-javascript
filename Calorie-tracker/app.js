const App = (function() {
  function addItem(e) {
    e.preventDefault();
    const input = UICtrl.getItemInput();
    if (input.meal !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.meal, input.calories);
      UICtrl.addListItem(newItem);
      UICtrl.clearInput();
    }
  }
  
  // Load event listeners
  function loadEvents() {
    const UISelectors = UICtrl.getSelectors();

    document.querySelector(UISelectors.addBtn).addEventListener('click', addItem);
  }
  
  // Public methods
  return {
    init: function() {
      // Fetch data
      const items = ItemCtrl.getItems();

      if (items.length !== 0) {
        UICtrl.populateList(items);
      } else {
        UICtrl.hideList();
      }
      
      loadEvents();
    },
  }
})(ItemCtrl, UICtrl);

App.init();