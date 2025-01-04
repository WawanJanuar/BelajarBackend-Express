const express = require('express');
const app = express();
const port = 3010;
//Middleware

//app level middleware
app.use((req, res, next) => {
    console.log("Middleware ke 1 berhasil")
    next();
})
app.get('/', (req, res) => {
    res.json({
        nama: "Wawan Januar",
        citaCita: "Busines Owner"
    })
})

app.use('/reqq', (req, res, next) => {
    console.log('Middleware ke 2 berhasil berjalan')
    next()
})

app.get('/reqq', (req,res) => {
    res.send("<h1>Halaman Reqq</h1>")
})

app.get('/reqq/:id', (req,res) => {
    res.json({
        id: `${req.params.id}`,
        nama: "Testing id"
    })
})

app.use((req, res) => {
    res.send('<h1>404 Not Found lah</h1>')
})

app.listen(port, () => {
    console.log(`server sedang berjalan di port ${port}`);
});