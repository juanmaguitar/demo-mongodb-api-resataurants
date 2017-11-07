const Restaurant = require('../../../models/Restaurant')

function getRestaurantById (req,res) {
  const { selection, limit, skip } = req
  const { id, km } = req.params

  Restaurant
    .findById(id)
    .then( restaurant => {
      const [ longitude , latitude ] = restaurant.address.coord;
      return Restaurant.find({ "address.coord" : {
            $near: {
              $geometry: {
                type: "Point" ,
                coordinates: [ longitude , latitude ]
              },
              $maxDistance: km*1000
            }
          }
      })
      .select(selection)
      .limit(limit)
      .skip(skip)
    })
    .then( restaurants => res.json(restaurants) )
}

module.exports = getRestaurantById