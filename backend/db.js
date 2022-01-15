const mysql = require('mysql2')

const openConnection=()=>{
    const connection = mysql.createConnection({
        uri: "mysql://db:3306",
        //port: 3306,
        database: 'mydb',
        user: 'root',
        password: 'root' 
    })
    connection.connect()
    return connection
}

module.exports = {
    openConnection
}