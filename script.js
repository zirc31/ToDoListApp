const todoInput = document.querySelector('.to-do-input');
const todoBtn = document.querySelector('.to-do-btn');
const todoListGroup = document.querySelector('.to-do-list-group');
const todoAlert = document.querySelector('.alert');
let idNum = 0;

todoBtn.addEventListener('click', () => {
    if ( todoInput.value > '' ) {
        todoAlert.classList.remove(`collapse.show`);
        todoAlert.classList.add(`collapse`);
        const todoItem = document.createElement("button");
        let todoId = `todo${idNum}`;
        todoItem.id = todoId;
        todoItem.classList.add(`btn`);
        todoItem.classList.add(`btn-light`);
        todoItem.classList.add(`to-do-btn-mg`);
        todoItem.innerText = todoInput.value;
        todoListGroup.appendChild(todoItem);
        todoInput.value = ``;
        todoItem.onclick = function() {todoItemBtn(todoId)};
        idNum += 1;
    } else {
        todoAlert.classList.remove(`collapse`);
        todoAlert.classList.add(`collapse.show`);
        todoAlert.innerText = `Task field is empty!, Kindly indicate what task to do.`;
        setTimeout(resetAlert, 2500);
    }
});

function todoItemBtn(id) {
    const thisTodoItem = document.querySelector(`#${id}`);

    thisTodoItem.classList.add(`to-do-item-completed`);
    let opacity = 1;
    setInterval(function() {
        if (opacity > 0) {
           opacity -= 0.1;
           thisTodoItem.style.opacity = opacity;
        }
     }, 250);
    setTimeout(function() {
        thisTodoItem.remove();
    }, 2750);
}

const resetAlert = () => {
    todoAlert.classList.remove(`collapse.show`);
    todoAlert.classList.add(`collapse`);
    todoAlert.innerText = ``;
};

