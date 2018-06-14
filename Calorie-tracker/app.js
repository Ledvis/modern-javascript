const App = (function() {
  function addItem(e) {
    e.preventDefault();
    const input = UICtrl.getItemInput();
    if (input.meal !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.meal, input.calories);
      UICtrl.addListItem(newItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      UICtrl.clearInput();
    }
  }

  function updateItemSubmit(e) {
    const editIcon = e.target;
    
    if (editIcon.classList.contains('edit-item')) {
      const dataId = editIcon.parentNode.parentNode.id; 
      const id = parseInt(dataId.split('-')[1]);
      const editedItem = ItemCtrl.getItemById(id);
      ItemCtrl.setCurrentItem(editedItem);
      UICtrl.addItemToForm();
      UICtrl.showEditState();
    }
  }
  
  // Load event listeners
  function loadEvents() {
    const UISelectors = UICtrl.getSelectors();

    document.querySelector(UISelectors.addBtn).addEventListener('click', addItem);
    document.querySelector(UISelectors.itemList).addEventListener('click', updateItemSubmit);
  }
  
  // Public methods
  return {
    init: function() {
      UICtrl.clearEditState();
      // Fetch data
      const items = ItemCtrl.getItems();

      if (items.length !== 0) {
        UICtrl.populateList(items);
      } else {
        UICtrl.hideList();
      }

      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      
      loadEvents();
    },
  }
})(ItemCtrl, UICtrl);

App.init();