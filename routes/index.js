const express = require('express')
const router = express.Router()

const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantsByCuisine = require('./handlers/getRestaurantsByCuisine')
const getRestaurantById = require('./handlers/getRestaurantById')

function getRoutes(db) {

  router.get('/restaurants', getRestaurants.bind(null, db) )
  router.get('/restaurants/cuisine/:cuisine', getRestaurantsByCuisine.bind(null, db, false ) )
  router.get('/restaurants/cuisine/not/:cuisine', getRestaurantsByCuisine.bind(null, db, true ) )
  router.get('/restaurant/:id', getRestaurantById.bind(null, db) )

  return router

}

module.exports = getRoutes