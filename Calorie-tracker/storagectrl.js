const StorageCtrl = (function() {
  return {
    setItemToStorage: function(item) {
      let items;
      
      if (!localStorage.getItem('items')) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemFromStorage: function() {
      let items;

      if (!localStorage.getItem('items')) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },
    updateItemInStorage: function(updatedItem) {
      const items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (item.id === updatedItem.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id) {
      const items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if (item.id === id) {
          items.splice(index, 1);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function() {
      localStorage.removeItem('items');
    }
  }
})();