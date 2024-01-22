import mysql from "mysql2/promise";

const mySql = mysql.createPool({
    // host: process.env.DB_HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE
    host: "localhost",
    user: "root",
    password: "Goastrider",
    database: "employee_db"
})


export default mySql;