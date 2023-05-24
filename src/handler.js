const { nanoid } = require('nanoid');
const travel = require('./travel');

//Konfigurasi Connect Cloud SQL
const connection = mysql.createConnection({
    host: '34.101.37.160',
    user: '[nama_pengguna]',
    password: '[kata_sandi]',
    database: '[nama_database]'
  });

// Mengambil Data di DB SQL
const getData = (request, h) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM [nama_tabel]';
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