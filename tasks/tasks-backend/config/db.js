const config = require('../knexfile.js')
const knex = require('knex')(config)

// Por algum motivo desconhecido, não está gerando a foreign key de tasks para users.
// Criei o banco de dados manualmente para pelo menos testar o código fonte do backend.
//knex.migrate.latest([config]) 
module.exports = knex