const ItemCtrl = (function() {
  const Item = function(id, meal, calories) {
    this.id = id;
    this.meal = meal;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0
  };

  return {
    logData: function() {
      return data;
    },
    getItems: function() {
      return data.items;
    },
    addItem: function(meal, calories) {
      let id;

      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      const newItem = new Item(id, meal, calories);
      data.items.push(newItem);
      return newItem;
    },
    getTotalCalories: function() {
      let total = 0;

      data.items.forEach(item => {
        total += parseInt(item.calories);
      });

      return total;
    },
    getItemById: function(id) {
      let requestedItem;

      data.items.forEach(item => {
        if (item.id === id) {
          requestedItem = item;
        }
      });

      return requestedItem;
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    }
  }
})();