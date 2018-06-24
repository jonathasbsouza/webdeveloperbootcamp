var todoList = ["Ver Manu", "Ver Paula", "Ver Julia"];

function seeList(){
    console.log("***********");
    if(todoList.length > 0){
        todoList.forEach(function(listItem, number){
            console.log("[" + number + "] " + listItem);
        })
    } else {
        console.log("Sem itens.")
    }
    console.log("***********");
}

function createItem() {
    var newTodo = prompt("insert your new todo");
            todoList.push(newTodo);
            console.log(newTodo + " added to the list.");
}

function deleteItem() {
    var deleteTodo = prompt("Insert number of item");
    todoList.splice(deleteTodo, 1);
    console.log("Item deleted.")
    seeList();
}

function whatTodo() {
    var keyword = prompt("What do you wanna do?");
    while(keyword !== "quit") {
        if(keyword === "list"){
            seeList();
        } else if (keyword === "new"){
            createItem();
        }  else if (keyword === "delete") {
            deleteItem();
        }  else {
            console.log(keyword + " is not a valid command.")
        }
        var keyword = prompt("What do you wanna do?");
    }

    console.log("Saiu");
}


