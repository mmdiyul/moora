exports.schema = {
  nama:{
      isString: true,
      trim: true,
      isEmpty: false,
  },
  email:{
      isString: true,
      isEmpty: false,
      trim: true
  },
  password:{
    isEmpty:false,
    isString: true,
  },
  roleId:{
      isEmpty: false,
  }
}