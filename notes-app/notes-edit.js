const titleElement = document.querySelector('#note-title');
const dateElement = document.querySelector('#last-edited');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');

const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find(note => note.id === noteId);

if (note === undefined) {
    location.assign('index.html')
} 

// initial page load
titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

// note title
titleElement.addEventListener('input', e => {   
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();    
    dateElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes); 
})

// note body
bodyElement.addEventListener('input', e => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes);    
})

// remove note
removeElement.addEventListener('click', () => {
    removeNote(note.id);
    savedNotes(notes);
    location.assign('index.html')
})

// sync data across pages
window.addEventListener('storage', e => {
    if (e.key === 'notes') {        
         notes = JSON.parse(e.newValue);
         note = notes.find(note => note.id === noteId);
        
        if (note === undefined) {
            location.assign('index.html')
        } 
        
        titleElement.value = note.title;
        bodyElement.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt)
    }
})