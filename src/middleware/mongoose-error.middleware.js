// const MongoServerError = require('mongodb-core').MongoServerError
const MongoServerError = require('mongodb').MongoServerError

module.exports = (err, req, res, next) => {
  // if (err) {
  //   if (err === mongoose.Error.ValidationError.name) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.CastError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.DivergentArrayError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.DocumentNotFoundError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.MissingSchemaError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.MongooseServerSelectionError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.ObjectExpectedError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.ObjectParameterError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.OverwriteModelError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.ParallelSaveError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.ParallelValidateError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.StrictModeError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.StrictPopulateError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.SyncIndexesError) {
  //     console.log(err.code)
  //     next()
  //   } else if (err instanceof mongoose.Error.VersionError) {
  //     console.log(err.code)
  //     next()
  //   }
  // }

  if (err instanceof MongoServerError) {
    console.log(err.code)
    next()
  }
  next(err)
}
