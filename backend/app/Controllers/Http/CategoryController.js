'use strict'

const Category = use('App/Models/Category')
const Database = use('Database')

class CategoryController {
    async store ({request, auth}) {
        const Category = {...request.all(), "user_id": auth.user.id};
        const createCategory = await Category.create(Category);
        return createCategory

      }
    async index ({request, auth, response}) {
        const categoryByCompany = request.all()
        const subquery = await Database
            .from('categories')
            .where('company_id', categoryByCompany.company_id)
            .select('category_name')       
        return subquery
    }

    async show ({params}) {
        const category = Database.from('categories').where('id', params.id).select('*')
        return category
    
      }

    async update ({request, response, params}) {
        const category = await Category.findOrFail(params.id)
        const updateCategory = request.all()
        category.merge(updateCategory)
        await category.save()
        return await Category.findOrFail(params.id)
    }
}

module.exports = CategoryController
