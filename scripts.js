const form=document.getElementById('list-container');
form.addEventListener('submit', addItem);
let itemsArray =[];
const list=JSON.parse(localStorage.getItem('list')) || itemsArray;

//*** Adding lis ***
function addItem(e){
  e.preventDefault();
  const newItem=document.getElementById('item').value;
  const li=document.createElement('li');
  const itemId = list.length ? list.length : 0
  li.setAttribute('id', itemId);
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);

  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('class', 'checkBoxLine')
  strikeLine.addEventListener('click',function(e){
    strikeLine.checked? e.target.parentElement.classList.add('strikeLine'): e.target.parentElement.classList.remove('strikeLine');
  });
  li.appendChild(strikeLine);

  const del=document.createElement('button');
  del.setAttribute('class', 'deleteButton');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);

  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    const indexItem=list.indexOf(newItem);
    list.splice(indexItem, 1)
    localStorage.setItem('list',JSON.stringify(list))
    liDel.removeChild(li);
  })

  document.getElementById('items').appendChild(li);
  list.push(newItem);
  localStorage.setItem('list', JSON.stringify(list));
}

let displayArrayItems = [];
const savedItems = JSON.parse(localStorage.getItem('list')) || displayArrayItems;
for (let i=0; i<savedItems.length; i++){
  const displayItems = savedItems[i]
  const newItem=displayItems
  const li=document.createElement('li');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);

  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('class', 'checkBoxLine')
  strikeLine.addEventListener('click',function(e){
    strikeLine.checked? e.target.parentElement.classList.add('strikeLine'): e.target.parentElement.classList.remove('strikeLine');
  });
  li.appendChild(strikeLine);

  const del=document.createElement('button');
  del.setAttribute('class', 'deleteButton');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);

  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    const indexItem=list.indexOf(newItem);
    list.splice(indexItem, 1)
    localStorage.setItem('list',JSON.stringify(list))
    liDel.removeChild(li);
  })
  document.getElementById('items').appendChild(li);
}
