const notes = [ 
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, 
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
];

document.querySelector('#create-note').addEventListener('click', (e) => {
    e.target.textContent = 'Create another note'
    console.log(e.target.textContent)
})

document.querySelector('#remove-all').addEventListener('click', e => {
    document.querySelectorAll('.note').forEach(note => note.remove());
})

document.querySelector('#search-text').addEventListener('input', e => {
    console.log(e.target.value);
})


// DOM - Document Object Model

// Query and remove

// const p = document.querySelector('p');
// p.remove();

// const ps = document.querySelectorAll('p');
// ps.forEach(p => p.remove());

// ps.forEach(p => {
//     p.textContent = '*****';
//     console.log(p.textContent);
// });

// add a new element
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JavaScript';
// document.querySelector('body').appendChild(newParagraph);