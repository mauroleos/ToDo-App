const form=document.getElementById('list-container');
form.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();
  const newItem = document.getElementById('item').value;
  const li = createLiElement(newItem);

  const checkbox = createCheckbox();
  li.append(checkbox);

  const del = createDeleteButton(newItem, li);
  li.appendChild(del);

  document.getElementById('items').appendChild(li);
  const list = JSON.parse(localStorage.getItem('list')) || [];
  list.push(newItem);
  localStorage.setItem('list', JSON.stringify(list));
}

const savedItems = JSON.parse(localStorage.getItem('list')) || [];

for (let i = 0; i < savedItems.length; i++){
  const li = createLiElement(savedItems[i]);

  const strikeLine = createCheckbox();
  li.appendChild(strikeLine);

  const del = createDeleteButton(savedItems[i], li);
  li.appendChild(del);

  document.getElementById('items').appendChild(li);
}

function createLiElement(todoItemText){
  const li = document.createElement('li');
  const list = JSON.parse(localStorage.getItem('list')) || [];
  const itemId = list.length ? list.length : 0;
  li.setAttribute('id', itemId);
  const textNode=document.createTextNode(todoItemText);
  li.appendChild(textNode);

  return li;
}

function createCheckbox(){
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'checkBoxLine')
  checkbox.addEventListener('click',function(e){
    checkbox.checked ?
    e.target.parentElement.classList.add('strikeLine')
    : e.target.parentElement.classList.remove('strikeLine');
  });

  return checkbox;
}

function createDeleteButton(todoItemText, liElement){
  const del = document.createElement('button');
  del.setAttribute('class', 'deleteButton');
  del.appendChild(document.createTextNode('X'));

  del.addEventListener('click',function(e){
    const liDel = document.getElementById('items');
    const list = JSON.parse(localStorage.getItem('list')) || [];
    const indexItem = list.indexOf(todoItemText);
    list.splice(indexItem, 1)
    localStorage.setItem('list',JSON.stringify(list))
    liDel.removeChild(liElement);
  });

  return del;
}
