## C23-PS399-Cloud-Computing / SIREKO 
## Table of Contents
- General Information
- Technologies
- Contact
- How To Deploy to GCP
- Documentation

## General Info
This is the API for our app SIREKO which stands for "Si Rekomendasi". This API is deployed using Google Cloud Platform's Cloud Run service and connected to the Cloud SQL database. This is the repository:
- Main, this branch is for development and testing purposes and only run on localhost with the provided local database. credentials.json not provided.


## Technologies
- Node.js version : v16.14.0
- Google Cloud Platform

## Contact
For further information you can contact:
- hakkibil543@gmail.com (Muhammad Bil Hakki)


## How To Deploy
In order to use the endpoint, you have to deploy the API using Cloud Run in Google Cloud Platform (Keep in mind that you will still need your own credential.json for this). Here's how :
- Clone the project **“GCP” branch** from repo
- Create Cloud SQL database (Cloud SQL for MySQL)
- Set up the required environment variables (Check the database.js)
- Build the container image using the provided Dockerfile
- Deploy the container image to Cloud Run
- Click the generated endpoint link to test the connection


## Documentation

## Check All Destinations
**Endpoint :**\
<https://sireko-api-hapi-kowxf7ahmq-et.a.run.app/destinations>


- Url : 
  - /destinations
- Method
  - GET
- Request Body
  - -
- Response

| <p>{</p><p>`    `"id": "1",</p><p>`    `"place_name": "Monumen Nasional",</p><p>`    `"description": "Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda. Pembangunan monumen ini dimulai pada tanggal 17 Agustus 1961 di bawah perintah presiden Soekarno dan dibuka untuk umum pada tanggal 12 Juli 1975. Tugu ini dimahkotai lidah api yang dilapisi lembaran emas yang melambangkan semangat perjuangan yang menyala-nyala. Monumen Nasional terletak tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.",</p><p>`    `"city": "Jakarta",</p><p>`    ` "rating": "4.6",</p><p>`    `"lat": "-6.17539",</p><p>`    `"lon": "106.827",</p><p>`    `"image": "https://assets.pikiran-rakyat.com/crop/0x416:1077x1079/x/photo/2021/01/26/2869470274.jpg"</p><p>},</p> <p>{</p><p>......,</p><p>......,</p><p>......,</p>},<p>......</p> |
| :- |

## Post and Get Location by User Id
**Endpoint :**\
<https://sireko-api-hapi-kowxf7ahmq-et.a.run.app/location/byUser_Id>


- Url : 
  - /location/byUser_Id
- Method
  - POST
- Request Body
  - user_id as string
- Response

| <p>{</p><p>`    `"id": "6",</p><p>`    `"place_name": "Taman Impian Jaya Ancol",</p><p>`    `"description": "Taman Impian Jaya Ancol merupakan sebuah objek wisata di Jakarta Utara.",</p><p>`    `"city": "Jakarta",</p><p>`    ` "rating": "4.5",</p><p>`    `"lat": "-6.11733",</p><p>`    `"lon": "106.858",</p><p>`    `"image": "https://inakoran.com/uploads/2020/06/13/1592061905-p1e25103da37c44e73efbf5e3809134a1.jpg"</p><p>},</p> <p>{</p><p>......,</p><p>......,</p><p>......,</p>},<p>......</p> |
| :- |

## Store User Profile
**Endpoint :**\
<https://sireko-api-hapi-kowxf7ahmq-et.a.run.app/submit_User_Profile>


- Url : 
  - /submit_User_Profile
- Method
  - POST
- Request Body
  - user_id as string
  - place_id as int
  - place_ratings as float
- Response

| <p>{</p><p>`    `"message": "User profile submitted successfully"</p><p>}</p>|
| :- |

## Post and Get Location Latitude and Longitude
**Endpoint :**\
<https://sireko-api-hapi-kowxf7ahmq-et.a.run.app/location/byLat_Lon>

- Url : 
  - /location/byLat_Lon
- Method
  - POST
- Request Body
  - latitude as float
  - longitude as float
- Response

| <p>{</p><p>`    `"id": "9",</p><p>`    `"place_name": "Pelabuhan Marina",</p><p>`    `"description": "Pelabuhan Marina Ancol berada di kawasan Taman Impian Jaya Ancol, Jakarta. Pelabuhan yang biasa disebut Dermaga Marina Ancol ini adalah kawasan yang tidak hanya untuk keperluan penyeberangan saja, tetapi juga dikembangkan untuk banyak hal, seperti wisata air, olahraga air maupun wahana bermain. Fungsi utama dari pelabuhan ini adalah untuk melayani para penumpang yang ingin menyeberang menuju ke kepulauan Seribu, begitu juga sebaliknya. Banyak orang yang berada di Jakarta dan sekitarnya, menjadikan kepulaun Seribu sebagai tujuan wisata yang utama. Liburan di Pulau Seribu memang mampu menghilangkan kepenatan bekerja di kota metropolitan, sembari menikmati keindahan pantai yang masih terjaga dengan baik. Marina Ancol berada di Jakarta Utara atau secara lengkap beralamat di Kota Tua, Ancol, Pademangan, Kota Jakarta. Sangat mudah menuju ke tempat ini karena tidak terlalu jauh dari pusat kota. Selain itu, ada banyak transportasi umum yang menuju ke tempat ini atau bisa juga menggunakan jasa transportasi online.",</p><p>`    `"city": "Jakarta",</p><p>`    ` "rating": "4.4",</p><p>`    `"lat": "1.07888",</p><p>`    `"lon": "103.931",</p><p>`    `"image": "https://www.hotelmurah.com/ceritawisata/wp-content/uploads/2019/09/pelabuhan-marina.jpg"</p><p>},</p> <p>{</p><p>......,</p><p>......,</p><p>......,</p>},<p>......</p> |
| :- |


