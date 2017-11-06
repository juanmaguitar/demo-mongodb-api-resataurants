function getRestaurantsByCuisine(db, not, req, res) {
  const { cuisine } = req.params

  let filter
  if (not) filter = { cuisine: { $ne: cuisine } }
  else filter = { cuisine }

  db.collection('restaurants')
    .find(filter)
    .limit(20)
    .toArray( (err, restaurants) => {
      res.json(restaurants)
    })
}

module.exports = getRestaurantsByCuisine
