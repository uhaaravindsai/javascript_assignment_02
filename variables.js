
//Global Scope  
let globalVar = "I'm global";
function greet() {
  console.log(globalVar); 
}
greet();
console.log(globalVar); 

//Local Scope
function sayHello() {
  let localVar = "Hello";
  console.log(localVar); 
}
sayHello();
console.log(localVar); 

// Block Scope
if (true) {
  let blockVar = "Block Scope";
  console.log(blockVar); 
}
console.log(blockVar); 



