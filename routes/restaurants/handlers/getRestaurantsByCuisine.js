const Restaurant = require('../../../models/Restaurant')

function getRestaurantsByCuisine(not, req, res) {
  const { selection, limit, skip } = req
  const { cuisine } = req.params

  let filter
  if (not) filter = { cuisine: { $ne: cuisine } }
  else filter = { cuisine }

  Restaurant
    .find(filter)
    .select(selection)
    .limit(limit)
    .skip(skip)
    .then( restaurants => res.json(restaurants) )
}

module.exports = getRestaurantsByCuisine
