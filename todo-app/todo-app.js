let todos = [];
    
const filters = { 
    searchText: '',
    hideCompleted: false
};

const todoJSON = localStorage.getItem('todos');
if (todoJSON !== null) {
    todos = JSON.parse(todoJSON);
}

const renderTodos = (todos, filters) => {    

    let filteredTodos = todos.filter(todo => { 
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });  

    // filteredTodos = filteredTodos.filter(todo => {
    //    return !filters.hideCompleted || !todo.completed;
    //     // if (filters.hideCompleted) {
    //     //     return !todo.completed;
    //     // } else {
    //     //     return true     // return all todos
    //     // }
    // });

    // console.log('filteredTodos:', filteredTodos)

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed);
   
    document.querySelector('#todos').innerHTML = ''; 

    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left.` 
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(todo => {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });  
};

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', e => {
     filters.searchText = e.target.value;
     renderTodos(todos, filters);
})

document.querySelector('#new-todo').addEventListener('submit', e => {
    e.preventDefault();
    todos.push({
        text: e.target.elements.newTask.value,
        completed: false
    });

    localStorage.setItem('todos', JSON.stringify(todos));

    renderTodos(todos, filters);
    e.target.elements.newTask.value = '';  
})

document.querySelector('#hide-completed').addEventListener('change', e => {        
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
}) 