const Role = require('./role.model')
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
    
    const count = Role.countDocuments(where)
    const data = Role.find(where).limit(limit).skip(offset).sort(sort).select('-__v')

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
    Role.findById(req.params.id)
      .then(role => res.json(role))
      .catch(error => next(error))
  },
  updateById: (req, res, next) => {
    Role.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
      .then(role => res.json(role))
      .catch(error => next(error))
  },
  insert: (req, res, next) => {
    Role.create({...req.body})
      .then(role => res.json(role))
      .catch(error => next(error))
  },
  removeById: (req, res, next) => {
    Role.findOneAndDelete({_id: req.params.id})
      .then(role => res.json(role))
      .catch(error => next(error))
  }
}