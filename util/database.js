const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'expensetraker',
    password: '10031998mysql@'
})


module.exports = pool.promise();