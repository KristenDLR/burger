$(document).ready(function() {
  //ajax GET, for loop to create button

  $.ajax("/burgers", {
    type: "GET"
  }).then(function(data) {
    console.log(data);
    var burgers = data.burgers;
    var len = burgers.length;

    for (var i = 0; i < len; i++) {
      var text = "Devour";
      var elem = $("#burgersAdded");
      var eClass = "btn-primary devour";
      var icon = "<i class='fas fa-utensils'></i>";

      if (burgers[i].devoured) {
        text = "Delete";
        elem = $("#beenDevoured");
        eClass = "btn-danger delete";
        icon = "<i class='fas fa-trash'></i>";
      }

      var new_elem =
        "<li class='list-group-item text-center my-2'>" +
        burgers[i].id +
        ". " +
        burgers[i].burger_name +
        "<button type='button' class='btn burger-btn mr-0 vl-auto" +
        eClass +
        "' data-id='" +
        burgers[i].id +
        "'>" +
        icon +
        text +
        "</button></li>";

      elem.append(new_elem);
    }
  });

  // var oven = document.getElementById("burger");
  $(document).on("click", ".addBurger", function(e) {
    e.preventDefault();


    //ajax to onclick mysql url should be from controller
    $.ajax({
      method: "POST",
      url: "/api/burgers",
      data: {
        burger_name: $("#burgerNew")
          .val()
          .trim()
          devoured:0
      }
    }).then(function(dataBurger) {
      console.log("successfully added.");
      location.reload();
    });
  });

  //onclick for devoure
  $(document).on("click", ".devoured", function(e) {
    console.log("Hello");
    e.preventDefault();
    var id = $(this).data("id");
    // var devouredState = {
    //   devoured: 1
    // }

    //ajax to onclick mysql url should be from controller
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id,
      data: { devoured: 1 }
    }).then(function(dataBurger) {
      // //push
      // $("#burger").push("#beenDevoured");
      console.log("successfully moved.");
      location.reload();
    });
  });

  //onclick for delete
  $(document).on("click", ".delete", function(event) {
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(function(data) {
      console.log("deleted");
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});
