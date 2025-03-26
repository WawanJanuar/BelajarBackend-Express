const mysql = require('mysql2');

//membuat koneksi ke database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tugas4'
})

//kita lakukan export modul untuk bisa digunakan secara global
module.exports = db