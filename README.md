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
  - 
- Method
  - GET
- Request Body
  - -
- Response

| <p>{</p><p>`    `"id": "1",</p><p>`    `"place_name": "Monumen Nasional",</p><p>`    `"description": "Monumen Nasional atau yang populer disingkat dengan Monas atau Tugu Monas adalah monumen peringatan setinggi 132 meter (433 kaki) yang didirikan untuk mengenang perlawanan dan perjuangan rakyat Indonesia untuk merebut kemerdekaan dari pemerintahan kolonial Hindia Belanda. Pembangunan monumen ini dimulai pada tanggal 17 Agustus 1961 di bawah perintah presiden Soekarno dan dibuka untuk umum pada tanggal 12 Juli 1975. Tugu ini dimahkotai lidah api yang dilapisi lembaran emas yang melambangkan semangat perjuangan yang menyala-nyala. Monumen Nasional terletak tepat di tengah Lapangan Medan Merdeka, Jakarta Pusat.",</p><p>`    `"city": "Jakarta",</p><p>`    ` "rating": "4.6",</p><p>`    `"lat": "-6.17539",</p><p>`    `"lon": "106.827",</p><p>`    `"image": "https://assets.pikiran-rakyat.com/crop/0x416:1077x1079/x/photo/2021/01/26/2869470274.jpg"}, <p>{</p><p>......,</p><p>......,</p><p>......,</p>},<p>......</p> |
| :- |

