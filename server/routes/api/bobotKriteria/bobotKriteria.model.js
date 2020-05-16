const { Schema, model} = require('mongoose')

const bobotKriteriaSchema = Schema({
  w1: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  w2: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  w3: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  w4: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  w5: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  w6: {
    type: Number,
    required: true,
    select: true,
    default: 1
  },
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    select: true,
    required: true,
    default: null
  }
})

module.exports = model('BobotKriteria', bobotKriteriaSchema, 'bobotKriteria')