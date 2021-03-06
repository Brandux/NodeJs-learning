require('dotenv').config();

const config = {
    dev: true,
    port:  3000,
    cors = '*',
    dbUser = process.env.DB_USER,
    dbPassword = process.env.DB_PASSWORD,
    dbHost = process.env.DB_HOST,
    dbName = process.env.DB_NAME
}

module.exports = { config }