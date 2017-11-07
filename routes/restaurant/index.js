const express = require('express')
const router = express.Router()

const getRestaurantById = require('./handlers/getRestaurantById')
const getRestaurantsByDistance = require('./handlers/getRestaurantsByDistance')

router.get('/:id', getRestaurantById )
router.get('/:id/around/:km', getRestaurantsByDistance )

module.exports = router