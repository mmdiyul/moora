const { Schema, model} = require('mongoose')

const alternatifSchema = Schema({
  nama: {
    type: String,
    required: true,
    select: true
  },
  c1: {
    type: Number,
    required: true,
    select: true
  },
  c2: {
    type: Number,
    required: true,
    select: true
  },
  c3: {
    type: Number,
    required: true,
    select: true
  },
  c4: {
    type: Number,
    required: true,
    select: true
  },
  c5: {
    type: Number,
    required: true,
    select: true
  },
  c6: {
    type: Number,
    required: true,
    select: true
  }
})

module.exports = model('Alternatif', alternatifSchema, 'alternatif')