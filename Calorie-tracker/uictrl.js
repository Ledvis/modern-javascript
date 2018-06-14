const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    listItem: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearAllBtn: '.clear-btn',
    itemMealInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  return {
    populateList: function(items) {
      let html = '';

      items.forEach(item => {
        html += `
          <li class="collection-item" id="data-${item.id}">
            <strong>${item.meal}</strong>
            <em>${item.calories}</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>
        `
      });

      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function() {
      return UISelectors
    },
    getItemInput: function() {
      return {
        meal: document.querySelector(UISelectors.itemMealInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      const li = document.createElement('li');
      li.classList.add('collection-item');
      li.setAttribute('id', `data-${item.id}`);
      li.innerHTML = `
        <strong>${item.meal}</strong>
        <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
      document.querySelector(UISelectors.itemList).style.display = 'block';
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemMealInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    clearEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.addBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
    },
    showEditState: function() {
      document.querySelector(UISelectors.addBtn).style.display = 'none';
      document.querySelector(UISelectors.updateBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline-block';
      document.querySelector(UISelectors.backBtn).style.display = 'inline-block';
    },
    addItemToForm: function() {
      document.querySelector(UISelectors.itemMealInput).value = ItemCtrl.getCurrentItem().meal;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
    },
    updateListItem: function(updatedItem) {
      const listItems = Array.from(document.querySelectorAll(UISelectors.listItem));

      listItems.forEach(listItem => {
        const itemId = listItem.getAttribute('id');
        if (itemId === `data-${updatedItem.id}`) {
          document.querySelector(`#data-${updatedItem.id}`).innerHTML = `
            <strong>${updatedItem.meal}</strong>
            <em>${updatedItem.calories}</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },
    deleteListItem: function(id) {
      const itemId = `#data-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    removeListItems: function() {
      document.querySelector(UISelectors.itemList);
    }
  }
})();