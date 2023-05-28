const path=require('path')
console.log(path.sep);
//for joining paths
const filepath= path.join('./content','subfolder','test.txt') // ./ is needed to get to current dir
console.log(filepath);

//for getting to basefile
const base=path.basename(filepath)
console.log(base);

//for absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);