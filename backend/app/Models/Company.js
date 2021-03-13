'use strict'

const Model = use('Model')

class Company extends Model {
    user () {
        return this.hasMany('App/Models/User')
      }
    
      images () {
        return this.hasMany('App/Models/Product')
      }
}

module.exports = Company
