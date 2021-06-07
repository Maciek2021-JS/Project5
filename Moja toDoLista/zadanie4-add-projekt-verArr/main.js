let toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const liNumber = document.querySelector("h1 span");
const input = document.querySelector("input");
const task = document.getElementsByClassName("task");
const input2 = document.querySelector(".zmienna");

const removeTask = (e) => {
    e.target.parentNode.remove();
    liNumber.textContent = task.length;
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    modulo();
}


const addTask = (e) => {
    e.preventDefault();
    const add = input.value;
    if (input.value === "") return;
    const li = document.createElement("li");
    li.innerHTML = add + "<button>Usuń</button>";
    li.className = "task";
    input.value = "";
    toDoList.push(li);
    modulo();

    input.value = "";
    ul.appendChild(li);
    liNumber.textContent = task.length;
    li.querySelector("button").addEventListener("click", removeTask)
}

const modulo = () => {
    ul.textContent = "";
    toDoList.forEach((toDoList, key) => {
        ul.appendChild(toDoList);
        toDoList.dataset.key = key;
    })

}

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let zmienna = toDoList;
    zmienna = zmienna.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    zmienna.forEach(toDoList => ul.appendChild(toDoList));
    liNumber.textContent = task.length;
}



input2.addEventListener("input", searchTask)
form.addEventListener("submit", addTask)