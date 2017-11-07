const express = require('express')
const router = express.Router()

const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantsByCuisine = require('./handlers/getRestaurantsByCuisine')
const getRestaurantsByBorough = require('./handlers/getRestaurantsByBorough')

router.get('/', getRestaurants )
router.get('/cuisine/:cuisine', getRestaurantsByCuisine.bind(null, false) )
router.get('/cuisine/not/:cuisine', getRestaurantsByCuisine.bind(null, true) )
router.get('/borough/:borough', getRestaurantsByBorough )

module.exports = router