const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  console.log("Connected correctly to server");

  db.collection('restaurants')
    .find(
      { cuisine: 'Italian' },
      { name: 1, "address.zipcode": 1, "grades.grade": 1 }
    )
    .sort({ borough:1, name: 1 })
    .limit(20)
    .toArray( (err, restaurants) => {
      console.log( JSON.stringify(restaurants, null, 2))
  })

})