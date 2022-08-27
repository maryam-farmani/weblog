const likeBtn = document.getElementById("like");
const nameList = document.getElementById("InputName");
const titleList = document.getElementById("inputTitle");
const descList = document.getElementById("textDesc");
const submitList = document.getElementById("btnSubmit");
const divList = document.getElementById("divTodo");

const savedLc = localStorage.getItem("list");
const parseSavedLc = JSON.parse(savedLc) || [];
console.log(parseSavedLc);
let savedList = [...parseSavedLc];

function handlelist() {

    const newList = {
        fullName : nameList.value,
        title : titleList.value,
        desc : descList.value,
    };


    savedList.push(newList);
    console.log(savedList);
    localStorage.setItem("list" , JSON.stringify(savedList));
    
     

    const listItem = document.createElement("li");
    const h2List = document.createElement("h2");
    h2List.innerHTML = newList.fullName;
    const h3List = document.createElement("h3");
    h3List.innerHTML = newList.title;
    const pList = document.createElement("p");
    pList.innerHTML = newList.desc;

    listItem.appendChild(h2List);
    listItem.appendChild(h3List);
    listItem.appendChild(pList);
    divList.appendChild(listItem);
     
     
};

submitList.addEventListener("click",handlelist);

savedList.forEach((todo) => {
 
    const listItem = document.createElement("li");
    const h2List = document.createElement("h2");
    h2List.innerHTML = todo.fullName;
    const h3List = document.createElement("h3");
    h3List.innerHTML = todo.title;
    const pList = document.createElement("p");
    pList.innerHTML = todo.desc;

    listItem.appendChild(h2List);
    listItem.appendChild(h3List);
    listItem.appendChild(pList);
    divList.appendChild(listItem);
});