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
        completed: true
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

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', e => {
    e.target.textContent = 'Add new to do'
});

const incompleteTodos = todos.filter(todo => !todo.completed); 

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.` 
document.querySelector('body').appendChild(summary);

todos.forEach(todo => {
    const paragraph = document.createElement('p');
    paragraph.textContent = todo.text;    
    document.querySelector('body').appendChild(paragraph);
})

document.querySelector('#new-todo-text').addEventListener('input', e => {
    console.log(e.target.value);
})

// incompleteTodos.forEach(todo => {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = todo.text;    
//     document.querySelector('body').appendChild(paragraph);
// })

// Remove all p tags that have 'the' in the text
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(p => {     
//    if(p.textContent.toLowerCase().includes('the')) {
//        p.remove();
//    }
// });
