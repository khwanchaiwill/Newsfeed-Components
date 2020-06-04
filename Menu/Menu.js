/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
const menuMaker = document.querySelector('.menu-button')
function makeMenu(menuOb){
  const menu = document.createElement('div')
  // const ulElement = doccument.createElement('ul')
  const ulChild1 = document.createElement('li')
  const ulChild2 = document.createElement('li')
  const ulChild3 = document.createElement('li')
  const ulChild4 = document.createElement('li')
  const ulChild5 = document.createElement('li')
  const ulChild6 = document.createElement('li')
  
  // menu.appendChild(ulElement)
  menu.appendChild(ulChild1)
  menu.appendChild(ulChild2)
  menu.appendChild(ulChild3)
  menu.appendChild(ulChild4)
  menu.appendChild(ulChild5)
  menu.appendChild(ulChild6)

  menu.classList.add('menu')

  ulChild1.textContent = menuOb
  ulChild2.textContent = menuOb
  ulChild3.textContent = menuOb
  ulChild4.textContent = menuOb
  ulChild5.textContent = menuOb
  ulChild6.textContent = menuOb

  menuMaker.addEventListener('click', event =>{

    menu.classList.toggle('menu--open')
  })
  return menu  
}
menuMaker.appendChild(menu(menuItems) )