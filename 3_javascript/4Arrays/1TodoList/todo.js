var listaTodo = ["Pedro"];
var actionTodo = prompt("O que vc deseja fazer?");

    while(actionTodo !== "quit"){
    if (actionTodo === "list") {
        console.log(listaTodo);
    } else if(actionTodo === "new") {
        var item = prompt("Enter new Todo");
        listaTodo.push(item);
    }
    var actionTodo = prompt("O que vc deseja fazer?");
    }
    console.log("VC DEU QUIT");