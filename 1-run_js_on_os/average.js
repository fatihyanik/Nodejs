console.log(process.argv);
// process.argv ==> [array of all arguments passed on the filled]
console.log(process.argv.slice(2));


let agrs = process.argv.slice(2)


function average3(){
    let argumentsLength = agrs.length;
    let sum = 0;
    agrs.forEach(arg=>{
        sum += Number(arg)
    })
    console.log(sum / argumentsLength)
}

average3()

/* function average(...args) {
  // let x = (a+ b+ c) / 3
  //let lastItemIndex = Object.keys(arguments).length - 1;
  console.log(arguments);
  //console.log(lastItemIndex);
  //console.log(arguments[lastItemIndex]);
}

/* const f = (...args) => {
    console.log(arguments)
}
 //  args arrow functionda calismiyormus
f(5,8,6) */

//average(14, 52, 30, 50, 99);
//average("str"); */

function average1() {
  // arguments ==> object
  // the number of all arguments is
  let argumentsLength = Object.keys(arguments).length;
  // console.log(argumentsLength);
  let sum = 0;
  Object.keys(arguments).forEach((key) => {
    // console.log(arguments[key])
    sum += arguments[key];
  });
  console.log(sum / argumentsLength);
}

average1(10, 24, 34, 5, 99);




