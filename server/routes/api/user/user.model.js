const { Schema, model} = require('mongoose')

const userSchema = Schema({
  nama: {
    type: String,
    required: true,
    select: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    default: null,
    unique: true,
    select: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: true,
    default: 'password'
  },
  roleId: {
    type: Schema.Types.ObjectId, 
    ref: 'Role', 
    select: true,
    default: null
  }
})

module.exports = model('User', userSchema, 'user')