const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const filtersApi = require('./middlewares/filters')

const routesRestaurants = require('./routes/restaurants')
const routesRestaurant = require('./routes/restaurant')

const urlDb = 'mongodb://localhost:27017/test'

const app = express()

mongoose.connect(urlDb, { useMongoClient: true })

app.use(filtersApi)

app.use('/restaurants', routesRestaurants)
app.use('/restaurant', routesRestaurant)

app.listen(3000)
console.log('Listening on PORT 3000...');