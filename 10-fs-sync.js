const {readFileSync,writeFileSync}=require('fs')//same as
// const readFileSync=require('fs') calling their methods
// const writeFileSync=require('fs') calling its method
console.log('Starting the task');
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second);

//creating a new file

// writeFileSync('./content/result.txt','The resultant file is created') it will overwrite every text

// to remove overwriting we add flag
writeFileSync('./content/result.txt','The resultant file is created',{flag:'a'})//
//this would append the text in file
console.log('Done with this task');
console.log('Starting the Next task');