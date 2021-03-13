'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsertColActiveProductSchema extends Schema {
  up () {
    this.alter('products', (table) => {
      table
        .boolean('active')
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = InsertColActiveProductSchema
