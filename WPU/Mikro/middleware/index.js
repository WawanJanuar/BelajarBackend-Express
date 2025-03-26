const express = require('express');
const db = require('./src/database/database'); // lakukan export untuk akses ke database
const app = express();
const port = 3010;
const allRoutes = require('./src/app')

db.connect((err) => {
    if(err) {
        console.log("terjadi kesalah saat menghubungkan database", err);
    } else {
        console.log("Database berhasil dihubungkan")
    }
})

// middleware untuk menerima req dari body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/ware', allRoutes)

//untuk menjalankan server
app.listen(port, () => console.log(`server berhasil berjalan di port: ${port}`))