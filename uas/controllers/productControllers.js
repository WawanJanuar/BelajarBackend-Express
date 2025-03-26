const db = require('../database/db')


const getAll = (req, res) => {
    const query = 'SELECT * FROM tbl_products';
    db.query(query, [], (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Error fetching all products',
                error: err
            });
        } else {
            res.status(200).json({ results });
        }
    });
};

const getById = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM tbl_products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Error fetching product by ID',
                error: err
            });
        } else {
            res.status(200).json({ results });
        }
    });
};

const create = (req, res) => {
    const { name, description, price, stock, category } = req.body;
    const query = 'INSERT INTO tbl_products (name, description, price, stock, category) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, description, price, stock, category], (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Error creating product',
                error: err
            });
        } else {
            res.status(201).json({ results });
        }
    });
};

const update = (req, res) => {
    const id = req.params.id;
    const { name, description, price, stock, category } = req.body;
    const query = 'UPDATE tbl_products SET name = ?, description = ?, price = ?, stock = ?, category = ? WHERE id = ?';
    db.query(query, [name, description, price, stock, category, id], (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Error updating product',
                error: err
            });
        } else {
            res.status(200).json({ results });
        }
    });
};

const deleteByid = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM tbl_products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            res.status(500).json({
                message: 'Error deleting product',
                error: err
            });
        } else {
            res.status(200).json({ results });
        }
    });
};

module.exports = {
    getAll,
    create,
    update,
    getById,
    deleteByid
};
