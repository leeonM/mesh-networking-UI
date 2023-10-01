import mysql from "mysql"
import dotenv from 'dotenv'

dotenv.config()


export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: "mesh"
})

db.connect(err=>{
    if (err) throw err;
    console.log("Database Connected")
})
