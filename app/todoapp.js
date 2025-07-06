let todo = [];

let req = prompt('enter the tast for u wanna do ?');


while(req != "quit"){
    if(req === 'list'){
        console.log("--------------------");
        for(let i = 0 ; i < todo.length ; i++){
            console.log(i , todo[i]);
        }
        console.log("--------------------");
    }else if(req === 'add'){
        let a = prompt("enter the task u wanna add in the todo ");
        todo.push(a);
        console.log("task added");
    }else if(req === 'remove'){
        let a = prompt("enter the idx of u wanna remove the task ?");
        todo.splice(a,1);
        console.log("remove the task");

    }

    req = prompt('enter the tast for u wanna do ?');

}