const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemMealInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
    }
  }
})();