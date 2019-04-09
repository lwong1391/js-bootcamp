let notes = [];

const filters = {
    searchText: ''
}

// check for existing saved data
const noteJSON = localStorage.getItem('notes');
if (noteJSON !== null) {
    notes = JSON.parse(noteJSON);
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter( note => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });    
    
   document.querySelector('#notes').innerHTML = '';

   filteredNotes.forEach(note => {
        const noteEl = document.createElement('p');

        if (note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unnamed note';
        }
        document.querySelector('#notes').appendChild(noteEl);
   })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        body: ''
    })
     localStorage.setItem('notes', JSON.stringify(notes));
     renderNotes(notes, filters);
})

document.querySelector('#search-text').addEventListener('input', e => { 
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#for-fun').addEventListener('change', e => {
    console.log(e.target.checked);
})

document.querySelector('#filter-by').addEventListener('change', e => {
    console.log(e.target.value)
})

// const user = {
//     name: 'Andrew',
//     age: 27
// }

// const userJSON = JSON.stringify(user);
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);
 
// localStorage.setItem('location', 'Philadelphia');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location');
// localStorage.clear();