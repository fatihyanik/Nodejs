// this file accepts 3 arguments:
// 1- the word
// 2- iteration (count)
// 3- speed (in ms)
// hint setInterval(procedure, ms)

let args = process.argv.slice(2)
let counter = 0;

const repeat = setInterval(()=>{
    console.log(counter, "- ", args[0])
    counter ++
    if(counter == Number(args[1])){
        process.exit(0) // kill process (NODEJS) (KILL PROGRAM)
        //clearInterval(repeat); // javascript
    }
},Number(args[2]))