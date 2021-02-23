import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml ( todo ));

console.log('todos', todoList.todos);

//const tarea = new Todo('Aprender Js');
//todoList.nuevoTodo(tarea);

 //console.log(todoList);

 //crearTodoHtml(tarea);

 //localStorage.setItem('mi-key', 'ABC123');

 //setTimeout( () => {
//     localStorage.removeItem('mi-key');
//}, 1500);



