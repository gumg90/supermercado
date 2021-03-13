'use strict'

const Product = use('App/Models/Product')
const Database = use('Database')

class ProductController {
  async store ({request, response, auth}) {
      const product = {...request.all(),  'user_id':auth.user.id};
      const createProduct = await Product.create(product);
      return createProduct
  }

  async index ({request, response, auth}) {
    const categoryByCompany = request.all()
    const subquery = await Database
        .from('products')
        .where('company_id', categoryByCompany.company_id)
        .where('category_id', categoryByCompany.category_id)
        .select('*')       
    return subquery
  }

  async show ({request, response, params}) {
    const product = Database.from('products').where('id', params.id).select('*')
    return product
  }

  async update ({request, response, params}) {
    const product = await Product.findOrFail(params.id)
    const updateProduct = request.all()
    product.merge(updateProduct)
    await product.save()
    return await Product.findOrFail(params.id)
  }

  async destroy ({request, response, params}) {
    const product = await Product.findOrFail(params.id)
    const updateProduct = request.all()
    product.merge(updateProduct)
    await product.save()
    return await Product.findOrFail(params.id)
}
}

module.exports = ProductController
