const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3010;

//middleware
app.use((req, res, next) => {
    console.log("Middleware pertama berhasil dijalankan");
    next();
}) //salah satu bentuk dari App-level-middleware

app.use(express.static('public'));


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

app.use('/about', (req, res, next) => {
    console.log('Middleware about berhasil berjalan');
    next();
})
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

app.use((req, res, next) => {
    res.status(404).send("<h1>404 Not Found</h1>")
}) //termasuk jenis App-level-middleware

// Start Server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
