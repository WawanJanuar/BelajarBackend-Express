const db = require('../database/database')

// untuk membaca semua data dari db
const getAll = (req, res) => {
    const query = "SELECT * FROM data_mahasiswa"
    db.query(query, [], (err, result) => {
        if(err){
            res.status(404).json({
                message: "Data gagak dimuat",
                error: err
            })
        } else {
            res.status(200).json({
                message: "Data berhasil dimuat",
                hasil: result
            })
        }
    })
}

//untuk menampilkan data mahasiswa yang diinginkan saja
const getById = (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM data_mahasiswa WHERE id = ?";

    db.query(query, [id], (err, result) => {
        if(err){
            res.status(404).json({
                message: "Data gagak dimuat",
                error: err
            })
        } else {
            res.status(200).json({
                message: "Data berhasil dimuat",
                hasil: result[0]
            })
        }
    })
}

//untuk melakukan update data mahasiswa
const updateData = (req, res) => {
    const query = "UPDATE * data_mahasiswa SET ? WHERE id = ?";
    const id = req.params.id;
    const mahasiswa = req.body;

    db.query(query, mahasiswa, [id], (err, data) => {
        if(err){
            res.status(404).json({
                message: "Data gagal diupdate",
                error: err
            })
        } else {
            res.status(200).json({
                message: "Data berhasil diupdate",
                hasil: data
            })
        }
    })
}

//untuk menambahkan data baru ke dalam database
const postData = (req, res) => {
    const mahasiswa = req.body;
    const query = "INSERT INTO * FROM data_mahasiswa"

    db.query(query, mahasiswa, (err, result) => {
        if(err) {
            res.status(404).json({
                message: "Data gagal ditambahkan",
                error: err
            })
        } else {
            res.status(200).json({
                message: "Data berhasil ditambahkan",
                hasil: result
            })
        }
    })
}

const deleteData = (req, res) => {
    const id = req.params.id
    const query = "DELETE * FROM data_mahasiswa WHERE id = ?"

    db.query(query, [id], (err, result) => {
        if(err) {
            res.status(404).json({
                message: "Data gagal dihapus",
                error: err
            })
        } else {
            res.status(200).json({
                message: "Data berhasil dihapus",
                hasil: result
            })
        }
    })
 
}

//export semua controller untuk bisa dipakai secara global
module.exports = {
    getAll,
    getById,
    updateData,
    postData,
    deleteData,
 
}