// const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'exercise'];

// console.log(todos.splice(2,1));    // delete the 3rd item

// console.log(todos.push('buy coffee'));       // add a new item onto the end

// console.log(todos.shift());     // remove the 1st item
 
// console.log(`You have ${todos.length} todos!`);
// console.log(todos);     // 'clean kitchen', 'do work', 'evercise' , 'buy coffee'

// todos.forEach((todo, index) => {
//     console.log(`${index + 1}. ${todo}`);
// });


// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// console.log(`=======`);

// for (let count=0; count < todos.length; count++) {
//     console.log(`${count+1}. ${todos[count]} `)
// }


// 1.convert array to array of objects -> text, completed
// 2. create function to remove a todo by text value

const todos = [
    {
        text: 'order cat food',
        completed: true
    },
    {
        text: 'clean kitchen',
        completed: false
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

//If you want false be in top:
// const sortTodos = function (todos) {
//     todos.sort(function (a) {
//         if (a.completed) {
//             return 1
//         } else return -1
//     })
// }   
//If you want true be in top:
// const sortTodos = function (todos) {
//     todos.sort(function (a) {
//         if (!a.completed) {
//             return 1
//         } else return -1
//     })
// }

// const sortTodos = (todos => {
//     todos.sort((a, b) => {
//         if (a.completed < b.completed) {
//             return -1           // a is not completed and b is
//         } else if (a.completed > b.completed) {
//             return 1
//         } else {
//             return 0;
//         }
//     })
// })

// Andrew's solution
const sortTodos = (todos => {
    todos.sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1           // a is not completed and b is
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0;
        }
    })
})

sortTodos(todos);
console.log(todos);


// const getThingsToDo = (todos) => {
//     return todos.filter((todo, index) => {
//         return !todo.completed;
//     })
// }

// console.log(getThingsToDo(todos));

// const deleteTodo = (todos, todoText) => {
//     const index = todos.findIndex((todo) => {
//         return todo.text.toLowerCase() === todoText.toLowerCase();
//     })
     
//     if (index > -1) {
//         todos.splice(index, 1);
//     };
// };

// deleteTodo(todos, 'buy food');
// console.log(todos)


// const deleteTodo = (todos, todoTask) => {
//     return todos.find((todo, index) => {
//         return todo.task.toLowerCase() === todoTask.toLowerCase();
//     })
// };

// const todo = deleteTodo(todos, 'buy food');
// console.log(todo)

