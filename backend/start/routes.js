'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.get('/sessions', 'SessionController.create')


Route.resource('empresa', 'CompanyController')
  .apiOnly()
  .middleware('auth')

Route.resource('categoria', 'CategoryController')
.apiOnly()
.middleware('auth')


Route.resource('produto', 'ProductController')
.apiOnly()
.middleware('auth')