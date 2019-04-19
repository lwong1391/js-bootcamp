'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {    
    const noteJSON = localStorage.getItem('notes');
    try {
        return noteJSON ? JSON.parse(noteJSON) : []
    } catch(e) {
        return []
    }    
}

// save the note to localStorage
const savedNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex(note => note.id === id) 
    if (noteIndex > -1) {
        notes.splice(noteIndex,1);
    }
}

// generate the DOM strcuture for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('a');
    const button = document.createElement('button'); 

    // setup the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);  
    button.addEventListener('click', () => {
        removeNote(note.id);
        savedNotes(notes);
        renderNotes(notes, filters);
    })

    // setup the note title text  
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    } 
    textEl.setAttribute('href', `edit.html#${note.id}`);   
    noteEl.appendChild(textEl);
    
    return noteEl;
}

// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1           // more recent
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createAt > b.createAt) {
                return -1
            } else if (a.createAt < b.createAt) { 
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabet') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }  else {
        return notes;
    }
}


// render application note
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));    
    
   document.querySelector('#notes').innerHTML = '';

   filteredNotes.forEach(note => { 
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
   })
}

// generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`