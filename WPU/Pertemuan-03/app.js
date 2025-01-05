const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3010;

// View Engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Data Mahasiswa
const mahasiswa = [
    { nama: "wawan januar", email: "wawan@gmail.com" },
    { nama: "Franklin Federik", email: "franklin@gmail.com" },
    { nama: "Jenny Doe", email: "jenny@gmail.com" }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        layout: 'partials/main-layout',
        title: "Halaman Home",
        mahasiswa
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'partials/main-layout',
        title: "Halaman About",
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'partials/main-layout',
        title: "Halaman Contact",
    });
});

// Error Handling untuk Halaman Tidak Ditemukan
app.use((req, res) => {
    res.status(404).render('404', {
        layout: 'partials/main-layout',
        title: "404 - Page Not Found"
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
