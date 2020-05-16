const { Schema, model} = require('mongoose')

const kriteriaSchema = Schema({
  kode: {
    type: String,
    required: true,
    select: true,
    unique: true
  },
  keterangan: {
    type: String,
    required: true,
    select: true
  },
  atribut: {
    type: String,
    required: true,
    select: true
  }
})

module.exports = model('Kriteria', kriteriaSchema, 'kriteria')