const form = document.getElementById('list-container');
const itemList = document.getElementById('items');
form.addEventListener('submit', addItem);
form.addEventListener('click', removeItem)

let itemsArray = [];

function addItem(e){
  e.preventDefault();

  const newItem = document.getElementById('item').value;
  const li = document.createElement('li');
  li.className='list-item';
  const textNode = document.createTextNode(newItem);
  li.appendChild(textNode);

  const del = document.createElement('button');
  del.className = 'dlt-button';
  del.appendChild(document.createTextNode('X'));
  li.appendChild(del);


  itemList.appendChild(li);

  // itemsArray.push(newItem);
  // localStorage.setItem('list', JSON.stringify(itemsArray))
  // const data = localStorage.getItem('list');
  // const returnArray = JSON.parse('data');
  // console.log(returnArray);
  // console.log(typeof(returnArray));

}

function removeItem(e){
  console.log(e.target);
}
