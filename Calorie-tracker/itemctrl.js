const ItemCtrl = (function() {
  const Item = function(id, meal, calories) {
    this.id = id;
    this.meal = meal;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      // {id: 0, meal: 'Steak Dinner', calories: 1200},
      // {id: 1, meal: 'Cookies', calories: 400},
      // {id: 2, meal: 'Eggs', calories: 300},
    ],
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
    }
  }
})();