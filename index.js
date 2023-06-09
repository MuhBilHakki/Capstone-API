'use strict';

const Hapi = require('@hapi/hapi');
const mysql = require('mysql');
const axios = require('axios');

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
      },
      {
        method: 'POST',
        path: '/location',
        handler: async (request, h) => {
          try {
            const { user_id, lat, lon } = request.payload;

            // Mengirim data lat dan lon ke URL deploy model machine learning menggunakan axios
            const response = await axios.post('https://sireko-ml-kowxf7ahmq-et.a.run.app', {
              lat,
              lon,
              user_id
            });

            // Mendapatkan hasil prediksi dari respons
            const prediction = response.data.prediction;

            // Mengembalikan respons dengan hasil prediksi
            return { user_id, lat, lon, prediction };
          } catch (error) {
            console.error(error);
            return h.response({ message: 'Internal Server Error' }).code(500);
          }
        }
      }
      // {
      //   method: 'POST',
      //   path: '/location',
      //   handler: async (request, h) => {
      //     try {
      //       const { lat, lon } = request.payload; // Menggunakan request.payload untuk mendapatkan data lat dan lon
      
      //       // Contoh respons berhasil
      //       return { lat, lon, message: 'Location received successfully' };
      //     } catch (error) {
      //       // Tangani kesalahan jika ada
      //       console.error(error);
      //       return h.response({ message: 'Internal Server Error' }).code(500);
      //     }
      //   }
      // }
      // {
      //   method : 'GET',
      //   path : '/locations',
      //   handler : async(request,h) =>{

      //   }
      // }
      
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
