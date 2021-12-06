var c = 0;

var div = document.getElementsByClassName('todos')[0];
var Btn = document.getElementsByTagName('button')[0];
var Input = document.getElementsByTagName('input')[0];

Btn.addEventListener('click',()=>{
    var text = document.createElement('p');
    text.setAttribute("key", c);
    text.textContent = Input.value;
    text.addEventListener("click",function(){
        remove(this);
    })
    div.appendChild(text)
    Input.value = ''
    c += 1;
})

function remove(elem){
    elem.remove();
}