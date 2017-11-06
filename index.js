const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

const url = 'mongodb://localhost:27017/test'

const app = express()

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  console.log("Connected correctly to server");

  app.get('/restaurants', (req,res)=> {
    db.collection('books').find().limit(20)
      .toArray( (err, restaurants) => {
        res.json(restaurants)
      })
  })

  app.get('/cuisine', (req,res)=> {
    db.collection('books').find().limit(20)
      .toArray( (err, restaurants) => {
        res.json(restaurants)
      })
  })

  app.get('/restaurant/:idToFind', (req,res)=> {
    const { idToFind } = req.params
    db.collection('books')
      .find({ _id: ObjectId(idToFind) })
      .limit(20)
      .toArray( (err, restaurant) => {
        res.json(restaurant)
      })
  })


})

app.listen(3000)
console.log('Listening on PORT 3000...');