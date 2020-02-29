const form = document.getElementById('list-container');
const itemList = document.getElementById('items')
form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  // li.className = 'text-input';
  const textNode = document.createTextNode(newItem);
  li.appendChild(textNode);

  itemList.appendChild(li);
}
