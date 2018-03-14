


// //---------------------------------------------------------------------
// class Todo {
//     constructor(id, title) {
//         this.id = id;
//         this.title = title;
//         this.completed = false;
//     }
// }
// //---------------------------------------------------------------------
// class TodoService {
//     constructor() {
//         this.todos = [
//             // { id: 1, title: 'learn Java', completed: true },
//             // { id: 2, title: 'learn JS', completed: true },
//             // { id: 3, title: 'learn Life', completed: false }
//         ];
//     }
//     addTodo(todo) {
//         // this.todos = [...this.todos, todo]; // immutable
//         this.todos.push(todo);
//     }
// }
// TodoService.todoId = 0;
// //---------------------------------------------------------------------

// //---------------------------------------------------------------------
// let service = new TodoService();
// //---------------------------------------------------------------------


// // View

let newTodoInputField = document.querySelector('#new-todo');
let ulElement = document.querySelector('#todo-list');


// function renderTodos() {
//     let todos = service.todos.forEach(function (todo, idx) {
//         renderTodo(todo);
//     });
// }
// renderTodos();


function renderTodo(todo) {
    // create dynamic DOM Eleements & append Existing DOM
    /*
        <li class="list-group-item">
            <label>todo-title</label>
            <button class="delete">delete</button>
        </li>
    */

    // <li class="list-group-item">
    let liElement = document.createElement('li');
    liElement.classList.add('list-group-item');

    //<label>todo-title</label>
    let labelElement = document.createElement('label');
    let textNode = document.createTextNode(todo.title);
    labelElement.appendChild(textNode);

    liElement.appendChild(labelElement);

    // <button class="delete">delete</button>
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.classList.add('delete');

    liElement.appendChild(deleteBtn);

    ulElement.appendChild(liElement);
}
newTodoInputField.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        let title = e.target.value;
        if (!title) return;
        //let todo = new Todo(TodoService.todoId++, title);
        let todo = { title, completed: false }
        // service.addTodo(todo)
        e.target.value = '';
        renderTodo(todo);
    }
});



