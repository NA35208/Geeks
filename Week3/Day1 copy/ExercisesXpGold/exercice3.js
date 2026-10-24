let shoppingList = [];

const root = document.getElementById("root");
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Item to buy";

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.textContent = "AddItem";
form.append(input, addButton);
root.appendChild(form);

const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "ClearAll";
clearButton.addEventListener("click", clearAll);
root.appendChild(clearButton);

form.addEventListener("submit", (event) => {
	event.preventDefault();
	addItem();
});

function addItem() {
	shoppingList.push(input.value);
	input.value = "";
}

function clearAll() {
	shoppingList.length = 0;
}

