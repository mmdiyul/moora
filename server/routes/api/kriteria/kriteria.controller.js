const Kriteria = require('./kriteria.model')
const { query } = require('../../helpers')

module.exports = {
  findAll: (req, res, next) => {
    let { where, limit, offset, sort } = query(req.query)

    const search = req.query.search
    if(search){
      where['$or'] = [{
        kode: {'$regex': search, '$options': 'i'}
      }, 
      {
        keterangan: {'$regex': search, '$options': 'i'}
      }]
    }
    
    const count = Kriteria.countDocuments(where)
    const data = Kriteria.find(where).limit(limit).skip(offset).sort(sort).select('-__v')

    Promise.all([count, data])
      .then(cb=>{
        res.json({
            count: cb[0],
            results: cb[1]
        })
      })
      .catch(error => next(error))
  },
  findById: (req, res, next) => {
    Kriteria.findById(req.params.id)
      .then(kriteria => res.json(kriteria))
      .catch(error => next(error))
  },
  updateById: (req, res, next) => {
    Kriteria.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
      .then(kriteria => res.json(kriteria))
      .catch(error => next(error))
  },
  insert: (req, res, next) => {
    Kriteria.create({...req.body})
      .then(kriteria => res.json(kriteria))
      .catch(error => next(error))
  },
  removeById: (req, res, next) => {
    Kriteria.findOneAndDelete({_id: req.params.id})
      .then(kriteria => res.json(kriteria))
      .catch(error => next(error))
  }
}