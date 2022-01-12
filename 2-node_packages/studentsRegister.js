// to make terminal as in\output
/* const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('please enter your first name:\n', firtsName=>{
    rl.question('please enter your last name:\n', lastName=>{
        console.log(`Your fullname is ${firtsName} ${lastName}`)
        process.exit()
    })
}) */

/**
 * 1- let the user enter the following data:
 *      a-first name
 *      b-last name
 *      c-age (18-100) number
 *      d-grades(0-100)
 * 2- create an Object with this data
 *      {firstName:"", lastName:"", age:20, grades:56}
 * 3- display the object in Terminal
 * 4- store (append) this object to students.json file
 * 5- display all students records from the file
 * 6- kill the process
 */

//const fs = require("fs");
let myObj = {};
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// get all data from students.json
fs.readFile("./students.json", (error, data) => {
  if (error) throw error;
  let students = data.toString();
  students = JSON.parse(students);
  console.log(students);
  rl.question("What is your first name ? ", function (fName) {
    rl.question("What is your last name ? ", function (lName) {
      rl.question("Age ? ", function (age) {
        rl.question("Grades ? ", function (grades) {
          console.log("Store Something");
          let data = {
            firstName: fName,
            lastName: lName,
            age: age,
            grades: grades,
          };
          students.push(data);
          // myObj=data;
          //appendFile("./students.json",myObj.toString())
          fs.writeFile("./students.json", JSON.stringify(students), (error) => {
            if (error) throw error;
            console.log("file saved");
            rl.close();
          });
          process.exit()
          rl.close();
        });
      });
    });
  });
});
rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
function appendFile(fileName, data) {
  let exist = fs.existsSync(fileName);
  if (true) {
    fs.appendFile(fileName, `\n${data}`, (error) => {
      if (error) throw error;
      console.log(`${fileName} was appended successfuly)`);
    });
  }
}
