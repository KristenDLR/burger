// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  updateOne: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne(
      "burgers",
      {
        devoured: true
      },
      condition,
      cb
    );
  },

  deleteOne: function(condition, callback) {
    orm.deleteOne("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
