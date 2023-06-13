'use strict';

const Hapi = require('@hapi/hapi');
const mysql = require('mysql');
const axios = require('axios');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST
  });

  // Konfigurasi Connect Cloud SQL
  const connection = mysql.createConnection({
    host: '34.101.37.160',
    user: 'user-capstone',
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
        method: 'POST',
        path: '/location/byUser_Id',
        handler: async (request, h) => {
          try {
            const { user_id } = request.payload;

            // Mengirim data lat dan lon ke URL deploy model machine learning menggunakan axios
            const response = await axios.post('https://sireko-ml-kowxf7ahmq-et.a.run.app/predict', {
              user_id
            });

            // Mendapatkan hasil prediksi dari respons
            const prediction = response.data.recommendations;
            
            // Mengembalikan respons dengan hasil prediksi
            return { prediction };
            
          } catch (error) {
            console.error(error);
            return h.response({ message: 'Internal Server Error' }).code(500);
          }
        }
      },
      {
        method: 'POST',
        path: '/submit_User_Profile',
        handler: async (request, h) => {
          try {
            const { user_id, place_id, place_ratings } = request.payload;
      
            await new Promise((resolve, reject) => {
              const query = 'INSERT INTO user_profile (user_id, place_id, place_ratings) VALUES (?, ?, ?)';
              connection.query(query, [user_id, place_id, place_ratings], (error, results, fields) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(results);
                }
              });
            });
      
            return h.response({ message: 'User profile submitted successfully' });
          } catch (error) {
            console.error(error);
            return h.response({ message: 'Internal Server Error' }).code(500);
          }
        }
      },      
      {
        method: 'POST',
        path: '/location/byLat_Lon',
        handler: async (request, h) => {
          try {
            const { latitude, longitude } = request.payload;

            // Mengirim data lat dan lon ke URL deploy model machine learning menggunakan axios
            const response = await axios.post('https://sireko-ml-kowxf7ahmq-et.a.run.app/predict_loc', {
              latitude,
              longitude
            });

            // Mendapatkan hasil prediksi dari respons
            // const predictions = response.data.map(location => {
            //     return {
            //         id: location.Place_Id,
            //         name: location.Place_Name,
            //         description : location.Description,
            //         rating : location.Rating,
            //         city : location.City,
            //         latitude: location.Lat,
            //         longitude: location.Long,
            //         image : location.Image
            //     };
            // });
            const predictions = response.data;
              

            // Mengembalikan respons dengan hasil prediksi
            return { predictions };
            
          } catch (error) {
            console.error(error);
            return h.response({ message: 'Internal Server Error' }).code(500);
          }
        }
      }
      
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
