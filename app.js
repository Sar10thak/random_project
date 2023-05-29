//npm --global cmd,comes with node
//npm --version

//to down load a pkg locally for a particular project
//npm -i <pkgname></pkgname> installs locally for local project

//to down load a pkg globally for any project
//npm -g <pkgname></pkgname> installs globally for any project

//package.json file is imp to get a hold of dependencies required
// to have it manually run npm init command and press enter
// default npm init -y
const _=require('lodash')
const items=[1,[2,[3,4]]]//array of arrays
const newitems= _.flattenDeep(items)
console.log(newitems);
console.log("hello world");
