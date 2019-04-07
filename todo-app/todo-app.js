const todos = [
    {
        text: 'order cat food',
        completed: false
    },
    {
        text: 'clean kitchen',
        completed: true
    },
    {
        text:  'buy food',
        completed: false
    },
    {
        text: 'do work',
        completed: false
    },
    {
        text:  'exercise',
        completed: true
    }
];

const filters = { 
    searchText: ''
};

const renderTodos = (todos, filters) => {    
    const matchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });  

    const incompleteTodos = matchedTodos.filter(todo => !todo.completed);

    document.querySelector('#todos').innerHTML = ''; 

    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left.` 
    document.querySelector('#todos').appendChild(summary);

    matchedTodos.forEach(todo => {
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
    renderTodos(todos, filters);
    e.target.elements.newTask.value = '';
})