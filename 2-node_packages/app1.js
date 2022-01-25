const fs = require("fs");

// create a new folder (directory)
// check if directory exist
let exist = fs.existsSync("./fatih");
console.log(exist);

if (!exist) {
  fs.mkdir("fatih", (error) => {
    if (error) throw error;
    console.log("Directory 'fatih' was created successfully");
  });
} else {
  console.log("The directory 'fatih' is already exist!");
}

// rename directory
if(exist){
    fs.rename("./fatih", "./yanik", error => {
        if(error)throw error;
        console.log("Folder renamed successfully")
    })
}

//remove directory
exist = fs.existsSync("./test/t1");
if(exist){
    fs.rm("./test/t1", error=>{
        if(error) throw error
        console.log("folder deleted")
    })
}

// create a file

if(true){
    fs.appendFile("./murat.txt", "Murat created murat.txt", error =>{
        if(error) throw console.log(error)
        console.log("file created successfully")
    })
}
fs.rm("./yanik", error=>{
    if(error) throw console.error
    console.log("file remover");
})

// rename file
if(exist){
fs.rename("./murat.txt", "./muratfatih.txt", error=>{
    if(error) throw console.log(error)
    console.log("file renamed successfully");
})}
