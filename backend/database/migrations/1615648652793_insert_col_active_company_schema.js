'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InsertColActiveCompanySchema extends Schema {
  up () {
    this.alter('companies', (table) => {
      table
        .boolean('active')
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = InsertColActiveCompanySchema
