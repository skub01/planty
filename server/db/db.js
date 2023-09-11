require("dotenv").config();
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const planty = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const config = {
  logging: false,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
};

if(process.env.LOGGING === 'true'){
  delete config.logging
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}

console.log( 'provess ENV!!!!!', process.env.DB_HOST,
process.env.DB_USER,
process.env.DB_PASS)

const db = new Sequelize(
  process.env.DATABASE_URL /* || `postgres://localhost:5432/${planty}` */, config)
module.exports = db
