function getRestaurants(db, req, res){
  db.collection('restaurants')
    .find()
    .limit(20)
    .toArray( (err, restaurants) => {
      res.json(restaurants)
    })
}

module.exports = getRestaurants