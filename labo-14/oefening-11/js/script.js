
// Importeer data uit JSON
import todosData from "../assets/json/todos.json" with { type: 'json' };

// Maak een lege array voor de voltooide todos
const completedTodos = [];

// Loop door de todos en voeg voltooide todos toe aan de array
for (let i = 0; i < todosData.length; i++) {
    if (todosData[i].completed) {
        completedTodos.push(todosData[i]);
    }
}

// Print de titels van de voltooide todos in de console
for (const todo of completedTodos) {
    console.log(todo.title);
}
