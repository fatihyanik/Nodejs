const fs = require("fs");
const path = require("path");

const getAllPersons = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "../data/persons.json"), (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(data.toString()));
      }
    });
  });
};

const getPersonById = (id) => {
  return new Promise((resolve, reject) => {
    getAllPersons()
      .then((data) => {
        let person = data.find((d) => d.id == id);
        resolve(person);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addPerson = (person) => {
  // 1- get all [data]
  // 2- insert person into this [data]
  // 3- write this [data] again to same file
  return new Promise((resolve, reject) => {
    getAllPersons()
      .then((data) => {
        // get the id from last object from data
        person.id = data[data.length - 1].id + 1;
        data.push(person);
        // rewrite the file
        fs.writeFile(
          path.join(__dirname, "../data/persons.json"),
          JSON.stringify(data),
          (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          }
        );
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = { getAllPersons, getPersonById, addPerson };
