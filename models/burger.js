// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  //Previous insertOne function
  // insertOne: function(name, cb) {
  //   orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  // },
  insertOne: function(cols, value, cb) {
    orm.selectAll("burger", cols, value, function(res) {
      cb(res);
    });
  },
  //Previous updateOne function
  // updateOne: function(id, cb) {
  //   var condition = "id=" + id;
  //   orm.updateOne(
  //     "burgers",
  //     {
  //       devoured: true
  //     },
  //     condition,
  //     cb
  //   );
  // },

  //when running, states updateOne not a function
  updateOne: function(objColVals, condition, cb) {
    orm.selectAll("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  //Previous deleteOne function
  // deleteOne: function(condition, callback) {
  //   orm.deleteOne("burgers", condition, function(res) {
  //     callback(res);
  //   });
  // }
  deleteOne: function(condition, cb) {
    orm.selectAll("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
