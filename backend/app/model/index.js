// Sequelize app
const dbconfig = require('../config/db.config')
console.log("sequelize with db connect")
const Sequelize = require("sequelize")
const sequelizedb = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWOR, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
  
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle
    }
})

const db = {}
db.Sequelize = Sequelize
db.sequelizedb = sequelizedb

db.empdetail=require('./crud.model')(sequelizedb,Sequelize)
module.exports = db