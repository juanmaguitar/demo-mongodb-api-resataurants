const Restaurant = require('../../../models/Restaurant')

function getRestaurants(req, res) {
  const { selection, limit, skip } = req

  Restaurant.find()
    .select(selection)
    .limit(limit)
    .skip(skip)
    .then( restaurants => res.json(restaurants) )
}

module.exports = getRestaurants