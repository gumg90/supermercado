
'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  companies () {
    return this.hasMany('App/Models/Company')
  }

  products () {
    return this.hasMany('App/Models/Product')
  }


  categories () {
    return this.hasMany('App/Models/Product')
  }

}

module.exports = User