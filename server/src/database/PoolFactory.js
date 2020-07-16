const { Pool } = require('pg');

class PoolFactory {
    static create() {
        const pool = new Pool({
            user: process.env.DATABASE_USER,
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            password: process.env.DATABASE_PASSWORD,
            port: process.env.DATABASE_PORT
        });

        process.on('SIGINT', () =>
            pool.end((error) => {
                if (error) return console.log(error);
                console.log();
                process.exit(0);
            })
        );

        return pool;
    }
}

const pool = PoolFactory.create();

module.exports = pool;
