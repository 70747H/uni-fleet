const mongoose = require('mongoose')

let db;
(() => {
  mongoose.connect(process.env.MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

  db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error: '))
  db.once('open', function () {
    console.log('Connected successfully')
  })
})()

module.exports = db
