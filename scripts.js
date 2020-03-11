const form=document.getElementById('list-container');
form.addEventListener('submit', addItem);

let itemsArray =[];
const list=JSON.parse(localStorage.getItem('list') || itemsArray);

//*** Adding lis to Array ***
function addItem(e){
  e.preventDefault();
  const newItem=document.getElementById('item').value;
  const li=document.createElement('li');
  li.setAttribute('id', 'listItems');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);

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

//*** Removing lis and buttons from Array ***
  del.addEventListener('click',function(){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    const removeDelBtn=document.getElementById('items');
    removeDelBtn.removeChild(del);
    const removeStrikeBtn=document.getElementById('items');
    removeStrikeBtn.removeChild(strikeLine);
    localStorage.removeItem('list');
  })

  document.getElementById('items').appendChild(li);
  // document.getElementById('items').appendChild(del);
  // document.getElementById('items').appendChild(strikeLine)

//*** Pushing items to localStorage ***
  itemsArray.push(newItem);
  localStorage.setItem('list', JSON.stringify(itemsArray));
}

//*** Displaying lis on website ***
const savedItems = JSON.parse(localStorage.getItem('list') || '[]');
for (let i=0; i<savedItems.length; i++){
  const displayItems = savedItems[i];
  console.log(savedItems);

  const newItem=displayItems
  const li=document.createElement('li');
  li.setAttribute('id', 'listItems');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);

//*** Adding strikeLine to lis ***
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

//*** Removing lis and buttons from Array ***
  del.addEventListener('click',function(){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    const removeDelBtn=document.getElementById('items');
    removeDelBtn.removeChild(del);
    const removeStrikeBtn=document.getElementById('items');
    removeStrikeBtn.removeChild(strikeLine);
    localStorage.removeItem('list');
  })

  document.getElementById('items').appendChild(li);
  // document.getElementById('items').appendChild(del);
  // document.getElementById('items').appendChild(strikeLine)
}


//*** Remvoing lis from website works succesfully but:
  //*** 1. All variables are removed from Array when the delete button is clicked
  //*** 2. Reloading the page shows the delete button and the checkbox but not the li for only 1 item
  //*** 3. To-Dos fail to crossed out when the checkbox is clicked
