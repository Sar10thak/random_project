const {readFile}=require('fs')//same as
console.log('Starting the task');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log("Completed the first task");
}
)
console.log("Next Task underway");