let listName = prompt(`Looks like you would like to make a new TODO list. Please give your list a name.`);
console.log(`#############################\n
Thanks! Your list is called ${listName}.`)
const toDoList = [];

let input = prompt(`Thanks! Please enter either:\n
 'new'- to enter a new entry to your list\n
 'list' - to view your current list\n
 'delete' - to start the process of deleting an entry`);



while (input !== "quit") {

    switch (input) {
        case "new":
            console.log(`############################# \n
            You started the process of adding a new TODO entry.`)
            input = prompt("Please enter the new entry in your TODO list")
            toDoList.push(input);
            console.log(`You added ${input}`);
            break;
        case "list":
            console.log(`############################# \n
            You started the process of viewing your TODO list`)
            printToDo(toDoList);
            break;
        case "delete":
            console.log(`############################# \n
            You started the process of deleting an entry in your TODO list.`)
            printToDo(toDoList);
            input = parseInt(prompt("Please enter an index from the list to remove"));
            let entryToDelete = toDoList.indexOf(input) + 1;
            let itemToDisplay = toDoList[entryToDelete];
            console.log(`Successfully removed ${itemToDisplay} from the list.`);
            toDoList.splice(entryToDelete, 1);
            break;
        default:
            console.log("Invalid command.")
            break;
    }

    input = prompt("Please enter a new command.");
}

console.log(`#############################\n
You have successfully quit the application.`);


function printToDo(arr) {
    if (arr === undefined) {
        arr = [];
    }
    let arraySize = arr.length;
    if (arraySize < 1) {
        return console.log("There is nothing in your TODO list.");
    } else {
        console.log(`#############################\n
        Current TODO:\n`);
    }

    for (let item of arr) {
        console.log(`${arr.indexOf(item) + 1} -`, item);
    }

}
