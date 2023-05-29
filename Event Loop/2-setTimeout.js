//started call stack
console.log("First")
setTimeout(()=>{
    console.log("Second"); //this woud go in queue and come only when call stack is empty
},0)
console.log("Third");