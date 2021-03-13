'use strict'

const Schema = use('Schema')

class CompanySchema extends Schema {
  up () {
    this.create('companies', (table) => {
      table.increments()
      table.string('company_name', 255).notNullable()
      table.string('cpf_cnpj', 20).notNullable().unique()
      table.string('phone_default', 20).notNullable()
      table.string('other_phones', 20)
      table.string('zip_code', 20).notNullable()
      table.string('adress', 255).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('companies')
  }
}

module.exports = CompanySchema
