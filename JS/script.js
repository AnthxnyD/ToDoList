let form = document.querySelector("form");
let text = document.getElementById("text");
let todoCon = document.querySelector(".todo-con");
form.addEventListener('submit', (e) => {

    e.preventDefault();
    addtodo();
})
let todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(element => {

        addtodo(element)
    });
}
function addtodo(elem) {

    let todoColl = document.createElement('div');
    let todotext = text.value;
    if (elem) {
        todotext = elem.text;
    }
    todoColl.innerHTML = `
        <div class="todo-li">
        <div class="check" ${elem && elem.complete ? "active-check" : ""}><img src="./images/icon-check.svg" alt="" srcset=""></div>
        <p class="ptag ${elem && elem.complete ? "complete" : ""}">${todotext}</p>
        <button class="close"><img src="./images/icon-cross.svg" alt="" srcset=""></button>
        </div>
        <div class="hr"></div>`;
    todoCon.appendChild(todoColl)
    updateLs()
    let close = todoColl.querySelector(".close");
    close.addEventListener("click", () => {

        todoColl.remove();
    })
    let check = todoColl.querySelector(".check");
    check.addEventListener('click', () => {
        check.classList.toggle("active-check")
        todoColl.children[0].children[1].classList.add("complete");

    })
    function updateLs() {

        let ptag = document.querySelectorAll(".ptag")
        let arr = [];
        ptag.forEach(element => {
            arr.push({
                text: element.innerText,
                complete: element.classList.contains("complete")

            })

        })
        localStorage.setItem("todos", JSON.stringify(arr));
    }


}