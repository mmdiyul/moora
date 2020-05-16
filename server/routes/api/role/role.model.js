const { Schema, model} = require('mongoose')

const roleSchema = Schema({
  nama: {
    type: String,
    enum: ['admin', 'user'],
    lowercase: true,
    required: true,
    select: true
  },
  prioritas:{
     type: Number,
     required: true,
     default: 1
  }
})

module.exports = model('Role', roleSchema, 'role')