const mongoose = require('mongoose')

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  image: String,
})

const Library = mongoose.model('Library', librarySchema)

module.exports = Library