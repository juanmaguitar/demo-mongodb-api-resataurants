const Restaurant = require('../../../models/Restaurant')

function getRestaurantById (req,res) {
  const { id } = req.params
  Restaurant
    .findById(id)
    .limit(20)
    .then( restaurant => res.json(restaurant) )
}

module.exports = getRestaurantById