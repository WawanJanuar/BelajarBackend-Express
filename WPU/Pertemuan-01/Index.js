const express = require('express');
const app = express();
const port = 3010;
// Pengenalan Express
app.get('/', (req, res) => {
    res.json({
        nama: "Wawan Januar",
        citaCita: "Busines Owner"
    })
})

app.get('/reqq', (req,res) => {
    res.send("Hello broo")
})

app.get('/reqq/:id', (req,res) => {
    res.json({
        id: `${req.params.id}`,
        nama: "Testing id"
    })
})

app.listen(port, () => {
    console.log(`server sedang berjalan di port ${port}`);
});