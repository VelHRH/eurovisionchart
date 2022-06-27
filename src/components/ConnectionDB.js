const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "lab4",
    connectionLimit: 10
});

module.exports=pool;