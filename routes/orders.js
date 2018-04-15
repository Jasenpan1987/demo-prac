const MongoClient = require('mongodb').MongoClient;
const R = require("ramda");

const valueOrNA = R.pathOr("N/A");

const { MONGO_URL, DB_NAME }= require("../configs");

module.exports = app => {
  app.get("/api/orders", (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      const db = client.db(DB_NAME);
      const collection = db.collection("orders");

      collection.find({}).toArray(function(err, docs) {
        const { 
          orderId, basketId, dateTime,
          customer: { _id: customerId, organisationCustomerId }, 
          seller, productId, productType
        } = docs[0];
        return res.send({
          orderId, basketId, dateTime, customerId, organisationCustomerId, seller,
          productId, productType
        });
      })
    })
  });

  app.get("/api/orderline", (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      const db = client.db(DB_NAME);
      const collection = db.collection("orders");

      collection.find({}).toArray(function(err, docs) {
        console.log(docs)
        const { 
          orderlineItems
        } = docs[0];

      const orderLine = orderlineItems.map(item => {
          return {
            orderlineId: item._id,
            inventoryType: valueOrNA(["inventory", "type"], item),
            priceId: valueOrNA(["inventory", "price", "_id"], item),
            sheetId: valueOrNA(["inventory", "price", "sheetId"], item),
            offerCode: valueOrNA(["inventory", "price", "offerCode"], item),
            price: valueOrNA(["inventory", "price", "price"], item),
            gst: valueOrNA(["inventory", "price", "gst"], item),
            gstRate: valueOrNA(["inventory", "price", "gstRate"], item),
          }
        })

        // "orderline id" : "inventory type" : "price id" : "sheetId" : "offerCode" : "price" : "gst": "gstRate"

        return res.send(orderLine);
      })
    });
  });

  app.get("/api/package", (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      const db = client.db(DB_NAME);
      const collection = db.collection("orders");

      collection.find({}).toArray(function(err, docs) {
        const { orderlineItems } = docs[0];

        const filteredOrderlineItems = orderlineItems.filter(item => item.inventory);

        const orderPackages = [];
        // console.log("filteredOrderlineItems:: ",filteredOrderlineItems)

        for (let item of filteredOrderlineItems) {
          console.log(item)
          for (let package of item.inventory.packages) {
            orderPackages.push({
              priceCategoryId: package.priceCategoryId,
              priceCategoryCode: package.priceCategoryCode,
              priceCategoryName: package.priceCategoryName,
              priceTypeId: package.priceTypeId,
              priceTypeCode: package.priceTypeCode,
              priceTypeName: package.priceTypeName,
              section: package.section,
              row: package.row,
              name: package.name,
              barcode: package.barcode
            });
          }
        }
//         "priceCategoryId" : "priceCategoryCode" : "priceCategoryName" : "priceTypeId" : "priceTypeCode" : "priceTypeName" :
// "section" : "row" : "name" : "barcode
        return res.send(orderPackages);
      })
    })
  });
}