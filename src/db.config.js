const mongoose = require('mongoose')

let db;
(() => {
  if (!db) {
    mongoose.connect(process.env.MONGO_DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    mongoose.set('debug', true)
    mongoose.set('strictPopulate', false)
    db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', function () {
      console.log('Connected successfully')
    })
  }
})()

module.exports = db
