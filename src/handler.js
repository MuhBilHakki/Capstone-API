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

  //Mengambil Data berdasarkan id
  const getDataById = (request, h) => {
    const package = request.params.id; // Assuming the ID is passed as a route parameter
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM tourism WHERE id = ?'; // Update the query to include a WHERE clause
      connection.query(query, [package], (error, results, fields) => {
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

  
  module.exports = { getData, getDataById };