const Restaurant = require('../../../models/Restaurant')

function getRestaurantsByBorough(req, res) {
  const { selection, limit, skip } = req
  const { borough } = req.params

  const filter = { borough }

  Restaurant
    .find(filter)
    .select(selection)
    .limit(limit)
    .skip(skip)
    .then( restaurants => res.json(restaurants) )
}

module.exports = getRestaurantsByBorough
