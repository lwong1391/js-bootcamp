// const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.indexOf('Note 1'));
// console.log(notes.pop());        // remove the last item in an array
// notes.push('My new note');       // add an item to end of the array

// console.log(notes.shift());      // remove 1st item
// notes.unshift('My first note');  // add item to the beginning of the array

// notes.splice(1,0,'this is the new second item');   // where to take action, how many to remove, item to add

// notes.splice(1,1,'remove note 2');

// notes[2] = 'this is now the new note 3';

// notes.forEach((item, index) => {
//     console.log(index, item)
// });

// console.log(notes.length);
// console.log(notes);
// console.log(notes[notes.length -2]);

// for (let count=2; count>=0; count--) {
// // for(let count=0; count<=2; count++) {
//     console.log(count);
// }

// for (let count = notes.length -1 ; count >=0; count--){
//     console.log(notes[count]);
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count]);
// } 

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

const sortNotes = (notes => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;          // a comes before b
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;       // b comes before a
        } else {
            return 0;
        }
    })
})

sortNotes(notes);
console.log(notes);


// const findNotes = (notes, query) => {
//     return notes.filter((note, index) => {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//         return isTitleMatch || isBodyMatch;
//     }) 
// }

// console.log(findNotes(notes, 'ne'));
    
// const findNote =  (notes, noteTitle) => {
//     const index = notes.findIndex((note, index) => {
//         console.log(index);
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
   
//     return notes[index];
// };

// const note = findNote(notes, 'office modification');
// console.log(note);


// const note = notes.find(note => note.title.toLowerCase() === 'office modification');
// console.log(note);

// const findNote = (notes, noteTitle) => {
//     return notes.find((note, index) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
// }

// const note = findNote(notes, 'office modification');
// console.log('note=', note);

// const index = notes.findIndex((note, index) => {
//     return note.title === 'Habbits to work on';
// });

// console.log('index:', index) 