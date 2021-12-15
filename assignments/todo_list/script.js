// var input= document.getElementsByTagName('input')[0];
var place= document.getElementsByClassName('todos')[0];
var complete= document.getElementsByTagName('button')[0];
var notComplete= document.getElementsByTagName('button')[1];
let todolist =[];

// add.addEventListener('click', function(){
//     var p = document.createElement('p');
//     p.textContent= input.value;
//     p.addEventListener('click',function(){
//         place.removeChild(p);
//     })
//     p.setAttribute('key',c)
//     place.append(p);
//     c++;
//     input.value=''
// })

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>{
    todolist = json.slice(0,10);
    console.log(todolist);
    todolist.forEach((items,index) => {
      var item = document.createElement('p');
      item.setAttribute('key',index);
      item.innerHTML = items.title
      place.append(item);
      
    });
  })
  .catch(e => console.log(e));



complete.addEventListener('click',function(){
  place.innerHTML='';
  todolist.forEach((items,index) =>{
    if (items.completed == true){
      var item = document.createElement('p');
      item.setAttribute('key',index);
      item.innerHTML = items.title
      place.append(item);

    }
  });


})

notComplete.addEventListener('click',function(){
  place.innerHTML='';
  todolist.forEach((items,index) =>{
    if (items.completed != true){
      var item = document.createElement('p');
      item.setAttribute('key',index);
      item.innerHTML = items.title
      place.append(item);

    }
  });


})

