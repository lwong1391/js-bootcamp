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
    const noteEl = document.createElement('a');
    const textEl = document.createElement('p');
    const statusEl = document.createElement('p');

    // setup the note title text  
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'Unnamed note';
    }     
    textEl.classList.add('list-item__title');
    noteEl.appendChild(textEl);
    
    // setup the link
    noteEl.setAttribute('href', `edit.html#${note.id}`);   
    noteEl.classList.add('list-item');

    // setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt);
    statusEl.classList.add('list-item__subtitle');
    noteEl.appendChild(statusEl);

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
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));    
    
    notesEl.innerHTML = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach(note => { 
            const noteEl = generateNoteDOM(note);
            notesEl.appendChild(noteEl);
        })
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMessage.classList.add('empty-message');
        notesEl.appendChild(emptyMessage);                                        
    }
}

// generate the last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`