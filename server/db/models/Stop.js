const Sequelize = require('sequelize')
const db = require('../db')

const Stop = db.define('stop', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //Unsure how image scraping will work with imageURL and addresses
  imageUrl: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.STRING
  }
})
