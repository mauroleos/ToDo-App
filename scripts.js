const form=document.getElementById('list-container');
form.addEventListener('submit', addItem);

let itemsArray =[];
const list=JSON.parse(localStorage.getItem('list') || itemsArray);

//*** Adding lis to Array ***
function addItem(e){
  e.preventDefault();
  const newItem=document.getElementById('item').value;
  const li=document.createElement('li');
  const textNode=document.createTextNode(newItem);
  li.appendChild(textNode);

//*** Adding delete button to Lis ***
  const del=document.createElement('button');
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);

//*** Adding strikeLine to lis ***
  const strikeLine=document.createElement('input');
  strikeLine.setAttribute('type', 'checkbox');
  strikeLine.setAttribute('id', 'checkboxLine')

//*** Removing lis and buttons from Array ***
  del.addEventListener('click',function(){
    const liDel=document.getElementById('items');
    liDel.removeChild(li);
    const removeDelBtn=document.getElementById('items');
    removeDelBtn.removeChild(del);
    const removeStrikeBtn=document.getElementById('items');
    removeStrikeBtn.removeChild(strikeLine);
  });

  document.getElementById('items').appendChild(li);
  document.getElementById('items').appendChild(del);
  document.getElementById('items').appendChild(strikeLine)

//*** Pushing items to localStorage ***
  itemsArray.push(newItem);
  localStorage.setItem('list', JSON.stringify(itemsArray));
}

//*** Displaying lis on website ***
for (let i=0; i<list.length; i++){
  const displayItems = list[i];
  console.log(displayItems)
}

const newItem=document.getElementById('item').value;
const li=document.createElement('li');
const textNode=document.createTextNode(newItem);
li.appendChild(textNode);

const del=document.createElement('button');
del.appendChild(document.createTextNode('X'));
li.appendChild(del);

const strikeLine=document.createElement('input');
strikeLine.setAttribute('type', 'checkbox');
strikeLine.setAttribute('id', 'checkboxLine')


del.addEventListener('click',function(){
  const liDel=document.getElementById('items');
  liDel.removeChild(li);
  const removeDelBtn=document.getElementById('items');
  removeDelBtn.removeChild(del);
  const removeStrikeBtn=document.getElementById('items');
  removeStrikeBtn.removeChild(strikeLine);
});

document.getElementById('items').appendChild(li);
document.getElementById('items').appendChild(del);
document.getElementById('items').appendChild(strikeLine)


//*** Remvoing lis from website works succesfully but:
  //*** 1. Variable stays in Array even after it's been removed from the Website
  //*** 2. Reloading the page shows the delete button and the checkbox but not the li for only 1 item 
  //*** 3. To-Dos fail to crossed out when the checkbox is clicked
