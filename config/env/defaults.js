'use strict'

const config = {
  port:  process.env.PORT || 3000,

  database: {
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      charset  : 'utf8'
    },
    debug: false
  },
  logger: {
    level: 'info',
    format: 'tiny'
  }
};

// Set the current environment or default to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
config.env = process.env.NODE_ENV;

module.exports = config;