'use strict'

const Schema = use('Schema')

class ImageSchema extends Schema {
  up () {
    this.create('product_image', table => {
      table.increments()
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_image')
  }
}

module.exports = ImageSchema