let input =  prompt("What would you like to do?");
let todos = [];

while(input !=="quit" && input !=="q"){
  if(input === "new"){
    const newTodo = prompt("Enter New todo");
      todos.push(newTodo)
      console.log(`${newTodo} Added In The List`);
  }
  else if(input === "list"){
    console.log("***************");
    for(let i=0;i<todos.length;i++){
      console.log(i,todos[i]);
    }
    console.log("***************");
  }
  else if(input === "delete"){
    const del = parseInt(prompt("Enter the index you want to delete"));
    if(isNaN(del)){
      console.log("Unknown Index")
    }
    else{
      todos.splice(del,1);
      console.log("Todo Removed!")
    }
  }
  input =  prompt("What would you like to do?");
}

if(input==="quit" || input ==="q"){
    console.log("Quit the Todo List!");
}