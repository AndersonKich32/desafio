const express = require('express');

const SearchController = require('./Controllers/searchController')

const routes = express.Router()

routes.get('/search/:address', SearchController.list)

module.exports = routes;