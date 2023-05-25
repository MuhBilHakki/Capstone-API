const { nanoid } = require('nanoid');
const travel = require('./travel');
const mysql = require('mysql'); 

//Konfigurasi Connect Cloud SQL
const connection = mysql.createConnection({
    host: '34.101.37.160',
    user: 'root',
    password: '123456',
    database: 'capstone'
  });

// Mengambil Data di DB SQL
const getData = (request, h) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM tourism';
      connection.query(query, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(h.response(results));
        }
      });
    }).catch(error => {
      return h.response(error.message).code(500);
    });
  };

  
  module.exports = { getData };