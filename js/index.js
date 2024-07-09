// get references to required DOM nodes
const inputText = document.querySelector('.input');
const addButton = document.getElementById('input');
const list = document.getElementById('list');
const clearButton = document.getElementById('clear');


// JS array initialized to store shopping list items
// updated when users add, edit, delete or mark items as purchased
let shoppingList = [];


// function to add items to the shopping list
addButton.addEventListener('click', () => {
    addListItem();
});

function addListItem() {
    // should capture input by user
    const inputItem = inputText.value.trim();
    if (inputItem === '') {
        alert('Please enter a valid item.');     // does nothing if user does not input anything
        return;
    }


    // add item to the shopping list array
    let shoppingItem = {
        item: inputItem,
        purchased: false
    }
    shoppingList.push(shoppingItem);


    // create list elements using DOM to capture input by user
    const listElement = document.createElement('li');
    const spanElement = document.createElement('span');


    // enables user to mark items that have been purchased
    const markPurchased = document.createElement('button');
    markPurchased.type = 'button';
    markPurchased.textContent = 'Mark Purchased';
    markPurchased.className = 'marked';

    markPurchased.addEventListener('click', function() {   // the value of the 'purchased' in the items's object is updated to true
        listElement.classList.toggle('purchased');
        if (listElement.classList.contains('purchased')) {
        markPurchased.textContent = 'Mark Unpurchased';
        shoppingItem.purchased = true;
        } else {
            markPurchased.textContent = 'Mark Purchased'
            shoppingItem.purchased = false;
        }
    });


    // enables user to edit items on the list
    const editItem = document.createElement('button');
    editItem.type = 'button';
    editItem.textContent = 'Edit';
    editItem.className = 'marked';
    const editInput = document.createElement('input');
    editInput.type = 'text';

    editItem.addEventListener('click', function() {
        if (listElement.classList.contains('editMode')) {
            spanElement.textContent = editInput.value;
            editItem.textContent = 'Edit';
            shoppingItem.item = editInput.value;         // the value of the 'item' key is updated

            listElement.removeChild(editInput);
        } else {
            editInput.value = spanElement.textContent;
            editItem.textContent = 'Save';
            spanElement.textContent = '';

            listElement.appendChild(editInput);
            editInput.focus();
        }
        listElement.classList.toggle('editMode');
    });


    // enables user to delete individual list items
    const deleteItem = document.createElement('button');
    deleteItem.type = 'button';
    deleteItem.textContent = 'Delete';
    deleteItem.className = 'marked';

    deleteItem.addEventListener('click', function() {
        list.removeChild(listElement);
        let itemToRemove = shoppingItem.item

         // the item object is removed from the shoppingList array
        let index = shoppingList.findIndex(shoppingItem =>
            shoppingItem.item === itemToRemove              // finds unkown index of the object in the array so as to use the splice method
        );
        if (index !== -1) {
            shoppingList.splice(index, 1);
        }
    });


     // adds user input, buttons dynamically into list
    spanElement.textContent = inputItem;  
    listElement.appendChild(spanElement);
    listElement.appendChild(deleteItem);
    listElement.appendChild(editItem);
    listElement.appendChild(markPurchased);
    list.appendChild(listElement);


    // resets input field once item is added to the list
    inputText.value = '';

};



// function to clear all list items
clearButton.addEventListener('click', clearList);

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);    // while loop to ensure the first child is removed until the list is empty
    }

    // clear shopping list array of all items
    shoppingList = [];
};

