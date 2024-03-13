
var cnt = 1;
var last = null;

function saveTag(el){
    last = el.value;
}

function buttonSave(el){
    createList(last);
}


function createList(last){
    var newDiv = document.createElement("div"); 
    newDiv.className = cnt+"chek";
    cnt++;
    var save = '<input id = "bx" onclick = "overLine(this)" type="checkbox"><p class = "Tags" >'+last+'</p><button onclick = "deleteById(this)" class = "del"></button>';
    newDiv.innerHTML = save; // задаем содержимое элемента
    document.body.appendChild(newDiv); // добавляем новый элемент в тело документа
}

function deleteById(el){
    const parent = el.parentNode;

    parent.remove();

}

function overLine(el){
    const parent = el.parentNode;
    const p = parent.querySelector("p");
    if(p.className=="NewClass"){
        p.className = 'Tags';
    }
    else{
        p.className = 'NewClass';
    }
}