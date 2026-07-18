let todo = [];

let req = prompt("Enter your request: ");

while(true) {
  if(req == 'quit'){
    console.log("Exit");
    break;
  }

  if(req == 'list') {
    console.log("___________")

    // for(list of todo) {
    //   console.log(list);
    // }
    for(i = 0; i < todo.length; i++){
      console.log(i, todo[i]);
    }
   console.log("___________")

  } else if(req == 'add') {
    let task = prompt("Enter your task to Add: ");
    todo.push(task);
    console.log("Task added");

  } else if(req == 'delete') {
    let del = prompt("Enter the Idx of task you want to delete: ");
    todo.splice(del, 1);
    console.log("Task deleted");
  }else{
    console.log("Invalid request");
  }

  req = prompt("Enter your request: ");
}