const BobotKriteria = require('./bobotKriteria.model')
const { query } = require('../../helpers')

module.exports = {
  findAll: (req, res, next) => {
    let { where, limit, offset, sort } = query(req.query)

    const count = BobotKriteria.countDocuments(where)
    const data = BobotKriteria.find(where).limit(limit).skip(offset).sort(sort).select('-__v')
      .populate('userId', 'nama email')

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
    BobotKriteria.findById(req.params.id)
      .then(bobotKriteria => res.json(bobotKriteria))
      .catch(error => next(error))
  },
  updateById: (req, res, next) => {
    BobotKriteria.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true}
    )
      .then(bobotKriteria => res.json(bobotKriteria))
      .catch(error => next(error))
  },
  insert: (req, res, next) => {
    BobotKriteria.create({...req.body})
      .then(bobotKriteria => res.json(bobotKriteria))
      .catch(error => next(error))
  },
  removeById: (req, res, next) => {
    BobotKriteria.findOneAndDelete({_id: req.params.id})
      .then(bobotKriteria => res.json(bobotKriteria))
      .catch(error => next(error))
  }
}