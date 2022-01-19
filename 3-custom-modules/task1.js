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
const { hash, checkPassword } = require("./models/passwordManager");
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
        console.log("your registration is done");
        process.exit();
        break;
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

        // get username
        const userNameLogin = await getEntry("enter your username:\n");
        // check if username is exist in the json file
        const jsonText = fs.readFileSync("users.json", "utf8");
        // convert json text to Array object
        const arr = JSON.parse(jsonText);
        // try to find a user with given username in the Array
        const user = arr.find((user) => user.userName === userNameLogin);
        // check if user exist
        if (!user) {
          console.log("user is not exist");
          process.exit();
        }
        // get password
        const passwordLogin = await getEntry("enter your password:\n");
        // check password
        checkPassword(passwordLogin, user.password)
          .then((result) => {
            if (result) {
              console.log("right entries");
              process.exit();
            } else {
              console.log("wrong password");
              process.exit();
            }
          })
          .catch((error) => {
            console.log(error);
            process.exit();
          });
        break;

      default:
        process.exit();
    }
  } catch (error) {}
})();
