const mysql = require('mysql2');

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'airtel123', 
    database:'blog'
})

module.exports = {db}