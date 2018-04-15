const S3 = require("aws-sdk").S3;
const MongoClient = require('mongodb').MongoClient;
const { MONGO_URL, DB_NAME, BUCKET_NAME, FILE_NAME }= require("../configs");

const s3Client = new S3();
const s3Config = { Bucket: BUCKET_NAME, Key: FILE_NAME };

module.exports = app => {
  app.get("/init", (req, res) => {
    s3Client.getObject(s3Config).promise()
      .then(({ Body }) => {
        return JSON.parse(Body.toString());
      })
      .then(content => {
        MongoClient.connect(MONGO_URL, function(err, client) {
          console.log("Connected successfully to server");
        
          const db = client.db(DB_NAME);
          const collection = db.collection("orders");

          collection.insertOne(content, (error, result) => {
            if (error) { console.log(error); }
            res.send(result);
          })
        });
      })
  });
}