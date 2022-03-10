const mysql = require('mysql');
require('dotenv').config();

function getUsers(){
    // start mysql connection
    const con = mysql.createConnection({
        host: process.env.HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    con.connect(error => {
        if(error){
            console.log(error);
        }else{
            // there are no errors with connections
            // we can run queries to database
            con.query('SELECT * FROM users', (error, result, fields)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(result);
                    console.log(fields);
                }
            })
        }
    })
}

getUsers()