const form = document.getElementById('list-container');
const itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
// form.addEventListener('click', removeItem);

let itemsArray = [];

function addItem(e){
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  const textNode = document.createTextNode(newItem);
  li.appendChild(textNode);

  const del = document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);

  const strikeLine = document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('id', 'checkboxLine')

  itemList.appendChild(li);

  del.addEventListener('click',function(){
    const liDel = document.getElementById('items');
    liDel.removeChild(li);
    const removeDelBtn = document.getElementById('items');
    removeDelBtn.removeChild(del);
    const removeStrikeBtn = document.getElementById('items');
    removeStrikeBtn.removeChild(strikeLine);
  });

  document.getElementById('items').appendChild(li);
  document.getElementById('items').appendChild(del);
  document.getElementById('items').appendChild(strikeLine)

  itemsArray.push(newItem);
  localStorage.setItem('list', JSON.stringify(itemsArray));

}



//** A user should be able to mark a TO-DO as completed
//** When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)
//** A user should have the option of deleting TO-DO’s that have been mark completed
