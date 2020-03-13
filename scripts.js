const form=document.getElementById('list-container');
form.addEventListener('submit', addItem);
let itemsArray =[];
const list=JSON.parse(localStorage.getItem('list') || itemsArray);
//*** Adding lis ***
function addItem(e){
  e.preventDefault();
  const newItem=document.getElementById('item').value;
  const li=document.createElement('li');
  li.setAttribute('id', 'listItems');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);
  //*** Adding Strikethrough line to Li ***
  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('id', 'checkboxLine')
  strikeLine.addEventListener('click',function(e){
    strikeLine.checked? e.target.parentElement.classList.add('strikeLine'): e.target.parentElement.classList.remove('strikeLine');
  });
  li.appendChild(strikeLine);
  //*** Adding delete button to Lis ***
  const del=document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);
  //*** Removing items from array ***
  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    const deletedItemsArray=JSON.parse(localStorage.getItem('list') || '[]');
    console.log(deletedItemsArray)
    const indexItem=list.indexOf(e.target.parentElement.textContent);
    console.log(indexItem);
    localStorage.removeItem(indexItem);
    localStorage.setItem('list', JSON.stringify(deletedItemsArray));
    console.log(e)
  })
  document.getElementById('items').appendChild(li);
  //*** Pushing items to localStorage ***
  itemsArray.push(newItem);
  localStorage.setItem('list', JSON.stringify(itemsArray));
}

let displayArrayItems = [];
//*** Adding lis ***
const savedItems = JSON.parse(localStorage.getItem('list') || displayArrayItems);
for (let i=0; i<savedItems.length; i++){
  const displayItems = savedItems[i];
  const newItem=displayItems
  const li=document.createElement('li');
  li.setAttribute('id', 'listItems');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);
  //*** Adding strikethrough line to lis ***
  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('id', 'checkboxLine')
  strikeLine.addEventListener('click',function(e){
    strikeLine.checked? e.target.parentElement.classList.add('strikeLine'): e.target.parentElement.classList.remove('strikeLine');
  });
  li.appendChild(strikeLine);
  //*** Adding delete button to Lis ***
  const del=document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);
  //*** Removing items from array ***
  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    const deletedItemsArray=JSON.parse(localStorage.getItem('list') || '[]');
    const indexItem=list.indexOf(e.target.parentElement.textContent);
    localStorage.removeItem(indexItem);
    localStorage.setItem('list', JSON.stringify(deletedItemsArray));
  })
  document.getElementById('items').appendChild(li);
}
