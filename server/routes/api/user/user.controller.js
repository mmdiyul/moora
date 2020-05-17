let User = require('./user.model')
let BobotKriteria = require('./../bobotKriteria/bobotKriteria.model')
const { query, createError } = require('../../helpers')
const { hash, compare } = require('bcrypt')

module.exports = {
  findAll: (req, res, next) => {
    let { where, limit, offset, sort } = query(req.query)
    const search = req.query.search
    
    if(search){
      where['$or'] = [{
        nama: {'$regex': search, '$options': 'i'}
      },{
        email: {'$regex': search, '$options': 'i'}
      }]
    }

    const count = User.countDocuments(where)
    const data = User.find(where).limit(limit).skip(offset).sort(sort)
      .populate('roleId', 'nama prioritas')
    
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
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(error => next(error))
  },
  updateById: (req, res, next) => {
    const data = req.body
    data.password = req.user.password
    User.findOneAndUpdate(
      {_id: req.params.id},
      {$set: data},
      {new: true}
    )
      .then(user => res.json(user))
      .catch(error => next(error))
  },
  insert: (req, res, next) => {
    const newUser = createNewUser(req.body)
    newUser
      .then(user => res.json(user))
      .catch(error => next(error))
  },
  loginLocalStrategy: (username, passwd) => {
    return new Promise((resolve, reject)=>{
      const user = User.findOne({$or:[{email:username},{username}]})
      .populate('roleId')
      .select('id password email nama roleId')
      user.then((foundUser)=>{
        if(!foundUser) return reject(createError(400,'Username atau Email tidak ditemukan!'))
        const { password } = foundUser
        const passwdValidation = compare(passwd, password)
        passwdValidation.then(isTrue=>{
            if(!isTrue) return reject(createError(400,'Password salah!'))
            return resolve(foundUser)
        }).catch(err=>{
            return reject(err)
        })
      })
    })
  },
  removeById: (req, res, next) => {
    Promise.all([
      User.findOneAndDelete({_id: req.params.id}),
      BobotKriteria.findOneAndDelete({userId: req.params.id})
    ])
      .then(user => res.json(user))
      .catch(error => next(error))
  }
}

const createNewUser = (data) => {
  return new Promise((resolve, reject)=>{
    const findEmail = User.findOne({email: data.email})
    const hashPassword = hash(data.password,10)
    let actions = [findEmail, hashPassword]

    Promise.all(actions)
      .then(cb=>{
        if(cb[0]) throw createError(400,'Email telah didaftarkan!')
        const hashedPassword = cb[1]
        data.password = hashedPassword;
        return User.create(data)
      })
      .then(results => resolve(results))
      .catch(err => reject(err))
  })
}