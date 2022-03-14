const mysql = require("mysql");
require("dotenv").config();
let con = null;

function connect() {
  return new Promise((resolve, reject) => {
    if (con) {
      // connection already established before
      if (con.state === "disconnected") {
        // try to connect
        con.connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      } else {
        // already connected
        resolve();
      }
    } else {
      // try to connect for the first time
      con = mysql.createConnection({
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASS,
        database: process.env.SQL_DB_NAME,
        multipleStatements: true,
      });
      con.connect((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    }
  });
}

function insertImage(name, category, description){
    return new Promise((resolve,reject)=>{
        connect().then(()=>{
            // connection done
            const queryString = `INSERT INTO images (name, category, description) VALUES (?,?,?);`;
            con.query(queryString, [name, category, description], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve({...result, _id: result.insertId})
                }
            })
        }).catch(error=>{
            reject(error)
        })
    })
}

function updateUrl(id, url){
    return new Promise((resolve, reject)=>{
        connect().then(()=>{
            const queryString = `UPDATE images SET url = ? WHERE id = ?`;
            con.query(queryString, [url, id], (error, result) => {
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        }).catch(error=>{
            reject(error)
        })
    })
}

function getImages(){
    return new Promise((resolve, reject)=>{
        connect().then(()=>{
            con.query('SELECT * FROM images WHERE url IS NOT NULL;', (error, result) =>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        }).catch(error =>{
            reject(error)
        })
    })
}

module.exports = {
  insertImage,
  updateUrl,
  getImages,
};
