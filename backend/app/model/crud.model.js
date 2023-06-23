//create table in db connect with sequelize

module.exports = (sequelizedb, Sequelize) => {
    console.log("Create empDetTable in db")
    const EmpTable = sequelizedb.define("empDetTable", {
        empid: {
            type: Sequelize.BOOLEAN
        },
        empname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })

    EmpTable.sync().then(() => {
        console.log("Table created")
    }).catch(error => {
        console.error("Error syncing EmpTable:", error);
    })

    return EmpTable
}