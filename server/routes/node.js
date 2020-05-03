
const express = require('express');
const Pool = require('pg').Pool

let app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'blux_db',
    password: 'X_arenaza_2016',
    port: 5432,
});


app.get('/node', (req, res) => {
    // const id = parseInt(req.params.id)
    pool.query('SELECT * FROM node', (error, results) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                err: error
            });
        }
        console.log(results.rows);
        res.status(200).json(results.rows)
        res.json({
            ok: true,
            node: results.rows
        });
    })

});

module.exports = app;