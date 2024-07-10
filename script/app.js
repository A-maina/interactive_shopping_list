//creates an element
function createAnElement(element) {
  return document.createElement(element);
}
//adds text
function addText(element, text) {
  return (element.innerText = text);
}
// appendChild
function appendChild(child, parent) {
  return parent.appendChild(child);
}
function select(selector) {
  return document.querySelector(selector);
}
function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}
function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}
const shoppingList = ["milk", "Tea", "bread"];

const ol = select("ol");

listen(document, "DOMContentLoaded", displayItems);

function displayItems() {
  ol.innerHTML = "";
  shoppingList.forEach(createAListItem);
}
function createAListItem(item) {
  const li = createAnElement("li");
  addText(li, item);
  appendChild(li, ol);
}

const form = select("form");
listen(form, "submit", addItem);

function addItem(event) {
  event.preventDefault();
  shoppingList.push(event.target[0].value);
  displayItems();
  event.target.reset();
}
