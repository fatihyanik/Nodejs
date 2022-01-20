/* let args = process.argv.slice(2);

function average(){
    let argumentsLength = args.length
    let product = 1;
    args.forEach(arg =>{
        product *= Number(arg);
    })
    console.log(product / argumentsLength)
}

average() */


/* function average1(){
    let argumentsLength = Object.keys(arguments).length;
    //console.log(argumentsLength)
    let product = 1;
    Object.keys(arguments).forEach((key) => {
        //console.log(arguments[key]);
        product *= arguments[key];
    });
    console.log(product / argumentsLength) 
}
average1(110,20) */

let args = process.argv.slice(2);

let firstNumber = Number(args[0]);
let secondNumber = Number(args[2]);
let operator = args[1];

console.log(eval(`${firstNumber}${operator}${secondNumber}`));


