// const form = document.querySelector('form')
// const button = document.querySelector('button')
// const input = document.querySelector('item')
// const ul = document.querySelector('ul')

const button = document.getElementById('list-button').addEventListener('click',listToDo)

function listToDo(e){
  const node = document.createElement('li');
  const textnode = document.createTextNode('text');
  node.appendChild(textnode);
  const newLi = document.getElementById('item').value;


// var display = getElementById('display');
// display.innerHTML = '<h3>'+e.target.id+'</h3>';
  // document.getElementById('display').appendChild(newLi);
  console.log(e.offsetX);
}
