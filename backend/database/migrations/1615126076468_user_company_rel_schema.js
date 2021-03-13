'use strict'

const Schema = use('Schema')

class UserCompanyRelSchema extends Schema {
  up () {
    this.create('user_company_rel', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('company_id')
        .unsigned()
        .references('id')
        .inTable('companies')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_company_rel')
  }
}

module.exports = UserCompanyRelSchema
