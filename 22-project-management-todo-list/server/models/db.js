const mysql = require('mysql');


let con = null;
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
            if (con.state === "disconnected") {
                con.connect(error => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        } else {
            con = mysql.createConnection({
                host: process.env.SQL_HOST,
                port: process.env.SQL_PORT,
                user: process.env.SQL_USER,
                password: process.env.SQL_PASS,
                database: process.env.SQL_DB
            });
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        }
    })
}

function addToDo (content) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'INSERT INTO todo (content, active) VALUES (?, 1)';
            con.query(sqlString, [content], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function deleteToDo (id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'UPDATE todo set active = 0 WHERE id = ?';
            con.query(sqlString, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getToDos () {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'SELECT id, content FROM todo WHERE active = 1'
            con.query(sqlString, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}


function addprogress (content) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'INSERT INTO progress (content, active) VALUES (?, 1)';
            con.query(sqlString, [content], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function deleteProgress (id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'UPDATE progress set active = 0 WHERE id = ?';
            con.query(sqlString, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getProgress () {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'SELECT id, content FROM progress WHERE active = 1'
            con.query(sqlString, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function addDone (content) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'INSERT INTO done (content, active) VALUES (?, 1)';
            con.query(sqlString, [content], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function deleteDone (id) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'UPDATE done set active = 0 WHERE id = ?';
            con.query(sqlString, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

function getDone() {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            const sqlString = 'SELECT id, content FROM done WHERE active = 1'
            con.query(sqlString, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}


module.exports = {
    addToDo,
    deleteToDo,
    getToDos,
    addprogress, 
    deleteProgress,
    getProgress,
    addDone,
    deleteDone,
    getDone
}