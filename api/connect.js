import mysql from "mysql"

export const db = mysql.createConnection({
  host:"mysql-117311-0.cloudclusters.net",
  user:"admin",
  password:"UdrB243L",
  port:"10015",
  database:"canva"
})
