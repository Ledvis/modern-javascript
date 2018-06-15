const Store = (function() {
  return {
    storeItem: function(item) {
      let items = [];
      
      if (!localStorage.getItem('items')) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }
})();