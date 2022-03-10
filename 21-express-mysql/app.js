const {addUser, updateFirstName} = require('./models/db')

// addUser('Piet', 'Prot', false).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// })

updateFirstName(12, 'murat').then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})