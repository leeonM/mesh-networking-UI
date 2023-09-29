import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "Itachi100",
    database: "mesh"
})

db.connect(err=>{
    if (err) throw err;
    console.log("Database Connected")
})