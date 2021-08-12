const Sequelize = require('sequelize')
const db = require('../db')

const Trip = db.define('trip', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //Not sure how/where leaflet will provide the map data
  mapUrl: {
    type: Sequelize.TEXT
  }
})

module.exports = Trip
