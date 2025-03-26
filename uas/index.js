const express = require('express');
const server = express();
const port = 3010;
const app = require('./app');
const connection = require('./database/db')

// handler connection
connection.connect((err) => {
    if(err){
        console.log("koneksi ke database gagal", err.stack)
    } else {
        console.log("koneksi berhasil berjalan")
    }
})

// Middleware untuk menangani request data
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Route utama
server.use('/produk', app);

// Menjalankan server
server.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
