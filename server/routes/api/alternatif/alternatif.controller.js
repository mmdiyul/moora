const Alternatif = require('./alternatif.model')
const { query } = require('../../helpers')

module.exports = {
  findAll: (req, res, next) => {
    let { where, limit, offset, sort } = query(req.query)
    
    const search = req.query.search
    if(search){
      where['$or'] = [{
        nama: {'$regex': search, '$options': 'i'}
      }]
    }
    
    const count = Alternatif.countDocuments(where)
    const data = Alternatif.find(where).limit(limit).skip(offset).sort(sort).select('-__v')

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
    Alternatif.findById(req.params.id)
      .then(alternatif => res.json(alternatif))
      .catch(error => next(error))
  },
  updateById: (req, res, next) => {
    Alternatif.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
      .then(alternatif => res.json(alternatif))
      .catch(error => next(error))
  },
  insert: (req, res, next) => {
    Alternatif.create({...req.body})
      .then(alternatif => res.json(alternatif))
      .catch(error => next(error))
  },
  removeById: (req, res, next) => {
    Alternatif.findOneAndDelete({_id: req.params.id})
      .then(alternatif => res.json(alternatif))
      .catch(error => next(error))
  }
}