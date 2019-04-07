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

const filteredTodos = (todos, filters) => {    
    const matchedTodos = todos.filter(todo => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    });  

    const incompleteTodos = matchedTodos.filter(todo => !todo.completed);

    document.querySelector('#todos').innerHTML = ''; 

    matchedTodos.forEach(todo => {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    });
   
    const summary = document.createElement('h3');
    summary.textContent = `You have ${incompleteTodos.length} todos left.` 
    document.querySelector('#todos').appendChild(summary);
};

filteredTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', e => {
     filters.searchText = e.target.value;
     filteredTodos(todos, filters);
})