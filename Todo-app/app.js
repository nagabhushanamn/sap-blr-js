//--------------------------------------------------------
// Model  ( e.g Todo )
class Todo {
    constructor(id, title) {
        this.id = id;
        this._title = title;
        this.completed = false
    }
    set title(title) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
}
//-------------------------------------------------------
// Service ( e.g TodoService)
class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        TodoService.todoId++;
        let newTodo = new Todo(TodoService.todoId, title);
        this.todos.push(newTodo);
    }
    deleteTodo(title) {
        this.todos.forEach( (item)=> {
            if (item.title === title) {
                let idx = this.todos.indexOf(item);
                this.todos.splice(idx, 1);
            }
        });
    }
}
TodoService.todoId = 0;
//--------------------------------------------------------
let service = new TodoService();
service.addTodo('eat lunch');
service.addTodo('sleep');
service.addTodo('go home');
//----------------------------------------------------------


//--------------------------------------------------------