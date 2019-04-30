'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos');
    try {
        return todoJSON ? JSON.parse(todoJSON) : []; 
    } catch(e) {
        return []
    }   
}

// save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);  
    if (todoIndex > -1) {
        todos.splice(todoIndex,1); 
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id)

    if (todo) {       //  if (todo !== undefined) 
        todo.completed = !todo.completed;
    }
}

// render application todos based on filters 
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter(todo => { 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        // debugger;
        return searchTextMatch && hideCompletedMatch;
    });  

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed);
   
    const todoEl = document.querySelector('#todos');
    todoEl.innerHTML = ''; 
    todoEl.appendChild(generateSummaryDOM(incompleteTodos));
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach(todo => {    
            todoEl.appendChild(generateTodoDOM(todo));
        });  
    } else {
        const messageEl = document.createElement('p');
        messageEl.classList.add('empty-message');
        messageEl.textContent = 'No to-dos to show';
        todoEl.appendChild(messageEl);
    }
}
 
// Get the DOM elements for individual todo
const generateTodoDOM = (todo) => {    
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const todoCB = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');
 
    // setup todo checkbox
    todoCB.setAttribute('type', 'checkbox');
    todoCB.checked = todo.completed;
    containerEl.appendChild(todoCB); 
    todoCB.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // setup todo text
    todoText.textContent = todo.text;
    containerEl.appendChild(todoText);

    // setup container
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    todoEl.appendChild(containerEl);

    // setup remove todo button    
    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {  
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {   
    const summary = document.createElement('h3');
    summary.classList.add('list-title');
    const plural = incompleteTodos.length === 1 ? '' : 's'; 
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left.`;    
    return summary;
}

