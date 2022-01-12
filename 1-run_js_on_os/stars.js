// this file accepts 2 arguments:
// 1- the character etc "*"
// 2- number (rows)
// 3- number (columns)

// ex: * 3 5
// OUTPUT
// *****
// *****
// *****

//1. solution
/* let args = process.argv.slice(2);
let char = args[0]
let rows = args[1];
let cols = args[2];
let line = [];

for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
        line.push(char);
    }
    console.log(line.join(""));
    line=[];
} */

// 2.solution
/**
 * this for args
 */
let args = process.argv.slice(2);
/**
 * this is for character
 */
let ch = args[0];
let rows = args[1];
// let rows = args[1] ? args[1] : 5
let col = args[2];

/**
 * @author Fatih
 * @param {string} character 
 * @param {number} rows 
 * @param {number} columns 
 */

function createStars(character = "*", rows = 2, columns = 3) {
  let str = "";
  for(let j=0; j<rows; j++){
      for(let i=0; i<columns; i++){
          str += character
      }
      str +="\n"
  }
  console.log(str)
}

createStars(ch, rows, col);


foo({})
/**
 * @author any
 * @param {Object} a  
 * @returns number of blabla
 */

 
function foo(a={}){
    return 0
}

console.log(args)
