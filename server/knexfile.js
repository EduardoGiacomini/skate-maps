module.exports = {
    development: {
        client: 'pg',
        connection: {
            database: 'skate_maps_db',
            user: 'postgres',
            password: 'postgres'
        },
        pool: { min: 2, max: 10 },
        migrations: {
            directory: `${__dirname}/src/core/database/migrations`
        }
    }
    // staging: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // },
    // production: {
    //   client: 'postgresql',
    //   connection: {
    //     database: 'my_db',
    //     user:     'username',
    //     password: 'password'
    //   },
    //   pool: {
    //     min: 2,
    //     max: 10
    //   },
    //   migrations: {
    //     tableName: 'knex_migrations'
    //   }
    // }
};
