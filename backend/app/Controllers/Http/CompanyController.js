'use strict'

const Company = use('App/Models/Company')
const Database = use('Database')

class CampanyController {
    async store ({request, auth}) {
      const company = request.all();
      const createCompany = await Company.create(company);
      await Database.insert({user_id: auth.user.id, company_id: createCompany.id}).into("user_company_rel")
      return createCompany
    }

    async index ({auth}) {
       const subquery = await Database
        .from('user_company_rel')
        .where('user_id', auth.user.id)
        .pluck('company_id')
       const listCompanyByUserId = await Database
         .from('companies')
         .whereIn('id', subquery)
      
      return listCompanyByUserId
    }

    async show ({params}) {
      const company = Database.from('companies').where('id', params.id).select('*')
      return company
    }

    async update ({request, response, params}) {
      const company = await Company.findOrFail(params.id)
      const updateCompany = request.all()
      company.merge(updateCompany)
      await company.save()
      return await Company.findOrFail(params.id)
    }
}

module.exports = CampanyController

