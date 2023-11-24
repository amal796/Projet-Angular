const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'amina',
  database: 'GestionFoyer'
});

connection.connect();

app.get('/foyers', (req, res) => {
  connection.query('SELECT * FROM foyer', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
