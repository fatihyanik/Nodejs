// write a code to let user enter his username and password to register:
// #what do you want to do:
// #register
// #enter your username:
// #fbw
// #enter your password:
// 12345678

// the program should save user data in a json file as array of objects
// [
//     {
//         username: 'fbw',
//         password: "[hashed password]"
//     }
// ]

// #your registration is done

const fs = require("fs");
const { hash } = require("./models/passwordManager");
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
  const jsonText = fs.readFileSync("users.json", "utf8");
  let arr;
  if (jsonText.trim() === "") {
    arr = [];
  } else {
    arr = JSON.parse(jsonText);
  }
  // add the obj to arr
  arr.push(obj);
  fs.writeFileSync("users.json", JSON.stringify(arr));
  return arr;
}

// IEFE

(async () => {
  try {
    const option = await getEntry("what do you want to do?\n");
    switch (option) {
      case "register":
        const userName = await getEntry("enter your username:\n");
        const password = await getEntry("enter your password:\n");
        const hashedPass = await hash(password);
        const obj = {
          userName,
          password: hashedPass,
        };
        const allData = save(obj);
        //console.log(allData);
        console.log("your registrationn is done");
        process.exit();
      case "login":
      // https://www.npmjs.com/package/bcrypt
      // if user entered login instead of register:
      // #enter your username:
      // #fbw
      // #enter your password:
      // 12345678
      // check his login entries and show these message:
      // if user not exist: [user not exist]
      // if user exist but password is wrong: [wrong password]
      // if user exist and the password is right; [right entries]

      default:
        process.exit();
    }
  } catch (error) {}
})();
