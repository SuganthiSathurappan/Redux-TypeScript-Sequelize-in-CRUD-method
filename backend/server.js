const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const { requirePost } = require('./app/routes/crud.route')
const crudController = require('./app/controllers/crud.controller')

const app = express()
var corsOptions = {
    orgin: "http://localhost:8080"
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(body_parse.urlencoded({ extended: true }))

//db connection with sequelize
const db = require('./app/model')
db.sequelizedb.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome Redux-Sequelize" });
// });

//call all crud method

app.get('/api/data', crudController.findAll)

app.post('/api/insert', crudController.create)

//app.get('/api/selectone/:id', crudController.findOne)

app.put('/api/update/:id', crudController.update)

app.delete('/api/delete/:id', crudController.delete)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server ins running on port ${PORT}`)
})