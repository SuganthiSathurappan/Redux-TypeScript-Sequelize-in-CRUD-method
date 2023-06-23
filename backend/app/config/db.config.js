console.log("db connect")
module.exports = {

    HOST: "localhost",
    USER: "root",
    PASSWOR: "",
    DB: "redux_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}