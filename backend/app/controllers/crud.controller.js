const db = require("../model")
const crud = db.empdetail // db.empdetail get from model/index.js
const Op = db.Sequelize.Op
console.log("Welcome crud controller")

exports.findAll = (req, res) => {
  crud.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving crud."
      });
    });
}

// Create and Save a new crud
exports.create = (req, res) => {
  // Validate request
  if (!req.body.empid || !req.body.email || !req.body.empname) {
    return res.send({
      message: "empid, email, and empname are required fields"
    });
  }

  // Create a crud
  const empTable = {
    Tempid: req.body.empid,
    Tempname: req.body.empname,
    Temail: req.body.email
  };

  const options = {
    where: {
      [Op.or]: [
        { email: empTable.Temail },
        { empid: empTable.Tempid }
      ]
    },
    defaults: {
      empid: empTable.Tempid,
      empname: empTable.Tempname,
      email: empTable.Temail
    }
  };
  try {
    // Save the employee record in the database
    crud.findOrCreate(options)
      .then(([empRecord, created]) => {
        if (created) {
          // New employee created successfully
          res.send({ message: 'true', empRecord });
        } else {
          // User already exists
          console.log("message: 'User already exists'");
          res.send({ message: 'User already exists' });
        }
      })
      .catch(error => {
        console.log("error:", error);
        res.send({ message: 'An error occurred while creating the employee' });
      });
  }
  catch (error) {
    // Handle any other errors
    res.send({ message: 'Internal server error' })
  }
};

// // Find a single crud data with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   crud.findByPk(id)
//     .then(data => {
//       if (data) {
//         console.log("findOne " + data)
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find crud with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//     });
// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  crud.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      console.log(num)
      if (num == 1) {
        res.send({
          message: "crud was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update crud with id=${id}. Maybe crud was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating crud with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  crud.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "crud was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete crud with id=${id}. Maybe crud was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete crud with id=" + id
      });
    });
};


