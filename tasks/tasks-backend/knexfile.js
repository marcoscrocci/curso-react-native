module.exports = {
	client: 'mysql2',
	connection: {
		host: 'localhost',
		database: 'tasks',
		user: 'root',
		password: 'condominioapp'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
