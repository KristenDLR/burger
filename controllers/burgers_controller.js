var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/api", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/api/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/burgers/api/:id", function(req, res) {
  let condition = `id = ${req.params.id}`;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.json({ id: req.params.id });
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
