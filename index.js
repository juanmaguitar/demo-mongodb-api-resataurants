const express = require('express')
const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'
const getRoutes = require('./routes')

const app = express()

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  console.log("Connected correctly to server");

  app.use( getRoutes(db) )

})

app.listen(3000)
console.log('Listening on PORT 3000...');