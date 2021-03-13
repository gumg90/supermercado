'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsertColActiveCategorySchema extends Schema {
  up () {
    this.alter('categories', (table) => {
      table
        .boolean('active')
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = InsertColActiveCategorySchema
