import uuidv4 from 'uuid/v4' 

let todos = [];

// Fetch existing todos from localStorage
const loadTodos = () => {
    const todoJSON = localStorage.getItem('todos');
    try {
        todos = todoJSON ? JSON.parse(todoJSON) : []; 
    } catch(e) {
        todos = []
    }   
}

// save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => todos;

// Create todo
const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    }); 
    saveTodos();
}

// remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);  
    if (todoIndex > -1) {
        todos.splice(todoIndex,1); 
        saveTodos()
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)

    if (todo) {       //  if (todo !== undefined) 
        todo.completed = !todo.completed;
        saveTodos()
    } 
}

loadTodos();

export { loadTodos, getTodos, removeTodo, toggleTodo, createTodo } 