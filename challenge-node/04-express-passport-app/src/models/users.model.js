const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
})

const User = mongoose.model('User', userSchema)

userSchema.methods.comparePassword = function (plainPassword, callback) {
  if (plainPassword === this.password) {
    callback(null, true)
  } else {
    callback(null, false)
  }

  return callback({ error: 'error' })
}

module.exports = User
