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
/* let myObj = {};
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
          myObj=data;
          appendFile("./students.json", myObj.toString());
          fs.writeFile("./students.json", JSON.stringify(students), (error) => {
            if (error) throw error;
            console.log("file saved");
            rl.close();
          });
          process.exit();
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
      console.log(`${fileName} was appended successfully)`);
    });
  }
} */
const fs = require("fs");
// to make terminal as in\output
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getEntry(message) {
  return new Promise((resolve, reject) => {
    rl.question(message, (data) => {
      if (data === "exit") {
        reject("closed by the user");
      } else {
        resolve(data);
      }
    });
  });
}

function save(obj) {
  const jsonText = fs.readFileSync("students.json", "utf8");
  let arr;
  if (jsonText.trim() === "") {
    arr = [];
  } else {
    arr = JSON.parse(jsonText);
  }
  // add the obj to arr
  arr.push(obj);
  fs.writeFileSync("students.json", JSON.stringify(arr));
  return arr;
}

async function ask() {
  try {
    const firstName = await getEntry("enter your first name\n");
    const lastName = await getEntry("enter your last name\n");
    // validate the age
    let age;
    let ageCounter = 0;
    do {
      if(ageCounter === 5){
        console.log("maximum tries number has reached");
        process.exit();
      }
      age = await getEntry("enter your age\n");
      ageCounter++;
    } while (age < 18 || age > 100 || isNaN(age));
    // validate grades
    let grades;
    do {
      grades = await getEntry("enter your grades\n");
    } while (grades < 0 || grades > 100 || isNaN(grades));
    // create an object
    const obj = {
      firstName,
      lastName,
      age,
      grades,
    };
    console.log(obj);
    const allData = save(obj);
    console.log(allData);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
  /*   rl.question("enter your first name", firstName => {
    rl.question("enter your last name", lastName => {
      rl.question("enter your age", age => {
        rl.question("enter your grades", grade =>{

        })
      })
    })
  }) */

  // call promise using then, catch
  // getEntry('enter your first name\n').then(firstName => {
  //   getEntry('enter your lastName\n').then(lastName => {
  //     console.log(firstName, lastName);
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }).catch(error => {
  //   console.log(error);
  // })
}

ask();
