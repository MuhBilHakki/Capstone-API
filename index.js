'use strict';

const Hapi = require('@hapi/hapi');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST
  });

  // Konfigurasi Connect Cloud SQL
  const connection = mysql.createConnection({
    host: '34.101.37.160',
    user: 'root',
    password: '123456',
    database: 'capstone'
  });

  server.route([
    {
      method: 'GET',
      path: '/destinations',
      handler: async (request, h) => {
        const query = 'SELECT * FROM tourism';
        return new Promise((resolve, reject) => {
          connection.query(query, (error, results, field) => {
            if (error) {
              reject(error);
            } else {
              resolve(h.response(results));
            }
          });
        }).catch(error => {
          return h.response(error.message).code(500);
        });
      }
      },
      {
        method: 'GET',
        path: '/destination/{id}',
        handler: async (request, h) => {
          const packageId = request.params.id;
      
          return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tourism WHERE id = ?';
            connection.query(query, [packageId], (error, results, fields) => {
              if (error) {
                reject(error);
              } else {
                resolve(h.response(results));
              }
            });
          }).catch(error => {
            return h.response(error.message).code(500);
          });
        }
      }
      
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
