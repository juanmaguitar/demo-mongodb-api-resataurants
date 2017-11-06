const ObjectId = require('mongodb').ObjectId

console.log(ObjectId)
function getRestaurantById (db, req,res) {
  const { id } = req.params
  console.log(id)
  db.collection('restaurants')
    .find({ _id: ObjectId(id) })
    .limit(20)
    .toArray( (err, restaurant) => {
      res.json(restaurant)
    })
}

module.exports = getRestaurantById