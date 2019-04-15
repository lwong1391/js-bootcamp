// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos');
    if (todoJSON !== null) {
        return JSON.parse(todoJSON);
    } else {
        return [];
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

    if (todo !== undefined) {
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
   
    document.querySelector('#todos').innerHTML = ''; 
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach(todo => {    
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });  
}
 
// Get the DOM elements for individual todo
const generateTodoDOM = (todo) => {    
    const todoEl = document.createElement('div');
    const todoCB = document.createElement('input');
 
    // setup todo checkbox
    todoCB.setAttribute('type', 'checkbox');
    todoCB.checked = todo.completed;
    todoEl.appendChild(todoCB);  

    todoCB.addEventListener('change', () => {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // setup todo text
    const todoText = document.createElement('span');
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // setup remove todo button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
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
    summary.textContent = `You have ${incompleteTodos.length} todos left.`;    
    return summary;
}

