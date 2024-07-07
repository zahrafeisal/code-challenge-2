# PHASE 1 WEEK 2 CODE CHALLENGE


## AUTHOR NAME
### Zahra Feisal


## ACCESSING AND RUNNING THE FILES
The folder <em>code-challenge-2</em> has 3 folders and 2 files in its root level. The <em>css</em> folder has a <em>style.css</em> file for styling , while the <em>js</em> folder has an <em>index.js</em> file which has JavaScript code that enables the website to run as required .


### Running the files in the browser
Open <em>index.html</em> using Live Server or visit <a href="https://zahrafeisal.github.io/code-challenge-2/">Code Challenge 2</a> . You'll encounter a page with an empty shopping list , that has 'Add' and 'Clear List' buttons as well as an input . 

1. To add items to the shopping list , type in the item into the input and click on 'Add' . The item will appear on the list . 
2. To mark the item as purchased , click on the 'Mark Purchased' button that appears to the rigt of the listed item . 
3. To edit the item , click on the 'Edit' button. An input will appear enabling you to edit the name of the item as desired .
4. To delete an item , click on the 'Delete' button .
5. To clear all items off the list ,  click on the 'Clear List' button . 


### How the code runs

#### JavaScript array maintaining the shopping list
An empty 'shoppingList' array is initialized , which stores added items . Elements, stored as objects, in the array can be edited, deleted or the entire array cleared completely . To check on the array , right-click on the web page then click 'Inspect'. Navigate to the console and run 'shoppingList' . The array will then be returned .

#### Adding items
An event listener is added to the 'Add' button so when clicked ;

1. The input value is captured and added as an item on the list
2. Alongside the item, 'Mark Purchased, 'Edit' and 'Delete' buttons are added . 
3. The item is added as an object to the shoppingList array, which the value of the 'purchased' key as 'false' .

#### Marking items as purchased
An event listener is added to the 'Mark Purchased' button . When clicked ;

1. A line strikes through the purchased item on the shopping list .
2. The value of the 'purchased' key in the item's object in the array is updated to true .

#### Editing items on the list
An event listener is added to the 'Edit' button . When clicked ;

1. An input appears, enabling users to edit the item name as desired .
2. The text on the button is changed to 'Save' . Users should click it to save the changes made . These changes will now appear on the shopping list .
3. The value of the key 'item' in the item's object in the array is then updated to the changes made by the user .

#### Deleting items off the list
An event listener is added to the 'Delete' button . When clicked ;

1. The item is removed from the list, as well as the buttons alongside it . 
2. The element is removed from the array . 

#### Clearing the entire shopping list
An event listener is added to the 'Clear List' button . When clicked ;

1. All items are removed from the list . The list is rendered empty .
2. All elements from the array are removed . The array becomes empty .
