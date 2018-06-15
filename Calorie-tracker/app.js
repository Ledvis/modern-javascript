const App = (function() {
  function onAddBtnClick(e) {
    e.preventDefault();
    const input = UICtrl.getItemInput();
    if (input.meal !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.meal, input.calories);
      UICtrl.addListItem(newItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      StorageCtrl.setItemToStorage(newItem);
      UICtrl.clearInput();
    }
  }

  function onEditIconClick(e) {
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

  function onUpdateBtnClick(e) {
    e.preventDefault();
    const input = UICtrl.getItemInput();
    if (input.meal !== '' && input.calories !== '') {
      const updatedItem = ItemCtrl.updateItem(input.meal, input.calories);
      UICtrl.updateListItem(updatedItem);
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      StorageCtrl.updateItemInStorage(updatedItem);
      UICtrl.clearEditState();
    }
  }

  function onDeleteBtnClick(e) {
    e.preventDefault();
    const itemId = ItemCtrl.getCurrentItem().id;
    ItemCtrl.deleteItem(itemId);
    UICtrl.deleteListItem(itemId);
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    StorageCtrl.deleteItemFromStorage(itemId);
    UICtrl.clearEditState();
    if (totalCalories === 0) {
      UICtrl.hideList();
    }
  }

  function onClearAllBtnClick() {
    ItemCtrl.clearAllItems();
    UICtrl.removeListItems();
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    StorageCtrl.clearItemsFromStorage();
    UICtrl.clearEditState();
    if (totalCalories === 0) {
      UICtrl.hideList();
    }
  }

  // Load event listeners
  function fireEvents() {
    const UISelectors = UICtrl.getSelectors();

    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });

    document.querySelector(UISelectors.addBtn).addEventListener('click', onAddBtnClick);
    document.querySelector(UISelectors.updateBtn).addEventListener('click', onUpdateBtnClick);
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', onDeleteBtnClick);
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    document.querySelector(UISelectors.clearAllBtn).addEventListener('click', onClearAllBtnClick);
    document.querySelector(UISelectors.itemList).addEventListener('click', onEditIconClick);
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

      fireEvents();
    },
  }
})();

App.init();