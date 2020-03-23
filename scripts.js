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
  // console.log(itemId)
  li.setAttribute('id', itemId);
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);
  //*** Adding Strikethrough line to Li ***
  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('class', 'checkboxLine')
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
    const deletedItemsArray=JSON.parse(localStorage.getItem('list')) || itemsArray;
    console.log(deletedItemsArray)
    const indexItem=deletedItemsArray.indexOf(e.target.parentElement);
    // console.log(e)
    // console.log(e.target.parentElement)
    liDel.removeChild(li);
  })
  document.getElementById('items').appendChild(li);
  //*** Pushing items to localStorage ***
  list.push(newItem);
  localStorage.setItem('list', JSON.stringify(list));
}

function deleteTask(id){
  for(let i=0; i<deletedItemsArray.length; i++){
    if(deletedItemsArray[i].id == itemId){
      list.splice(i,1);
    }
    localStorage.setItem('list', JSON.stringify(list));
    console.log(list);
  }
}

let displayArrayItems = [];
//*** Adding lis ***
const savedItems = JSON.parse(localStorage.getItem('list')) || displayArrayItems;
for (let i=0; i<savedItems.length; i++){
  const displayItems = savedItems[i]
  const newItem=displayItems
  const li=document.createElement('li');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);
  //*** Adding strikethrough line to lis ***
  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('class', 'checkboxLine')
  strikeLine.addEventListener('click',function(e){
    strikeLine.checked? e.target.parentElement.classList.add('strikeLine'): e.target.parentElement.classList.remove('strikeLine');
  });
  li.appendChild(strikeLine);
  //*** Adding delete button to Lis ***
  const del=document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);
  //*** Gets rid of Li - Returns disappeared items after reload and allows to you to remove it again ***
  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
  })
  document.getElementById('items').appendChild(li);
}
