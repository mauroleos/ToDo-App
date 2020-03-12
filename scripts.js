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

//*** Removing lis, delete buttons, amd strikethrough lines ***
  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    // const removeDelBtn=document.getElementById('items');
    // removeDelBtn.removeChild(del);
    // const removeStrikeBtn=document.getElementById('items');
    // removeStrikeBtn.removeChild(strikeLine);

    const arrayItems=JSON.parse(localStorage.getItem('list') || '[]');
    const indexItem=list.indexOf();
    console.log(indexItem);
    localStorage.removeItem(indexItem);
    localStorage.setItem('list', JSON.stringify(arrayItems));
  })

  document.getElementById('items').appendChild(li);

//*** Pushing items to localStorage ***
  itemsArray.push(newItem);
  localStorage.setItem('list', JSON.stringify(itemsArray));
}

// const indexItem=list.indexOf('hi');
// console.log(indexItem)
// // localStorage.removeItem('list');

let displayArrayItems = [];

//*** Adding lis ***
const savedItems = JSON.parse(localStorage.getItem('list') || displayArrayItems);
for (let i=0; i<savedItems.length; i++){
  const displayItems = savedItems[i];
  // console.log(savedItems);

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

//*** Removing lis, delete buttons, amd strikethrough lines ***
  del.addEventListener('click',function(e){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    // const removeDelBtn=document.getElementById('items');
    // removeDelBtn.removeChild(del);
    // const removeStrikeBtn=document.getElementById('items');
    // removeStrikeBtn.removeChild(strikeLine);
    // localStorage.removeItem('list');
  })

  document.getElementById('items').appendChild(li);
}
