$(document).ready(function() {


  $(document).on("click", ".addBurger",function(e){
    e.preventDefault();

      //ajax to onclick mysql url should be from controller
    $.ajax({
      method: "POST",
      url: "/api/burgers/",
      data: {burger_name: $('#burgerNew').val().trim()}
    })
      .then(function(dataBurger) {
        console.log("successfully added.");
        location.reload();

      });

  });


  //onclick for devoure
  $(document).on("click", ".devoured",function(e){
    console.log("Hello");
    e.preventDefault();
    var id = $(this).data("id");

      //ajax to onclick mysql url should be from controller
    $.ajax({
      method: "PUT",
      url: "/api/burgers/"+id,
      data: {devoured: true}
    })
      .then(function(dataBurger) {
        $("#burger").push("#beenDevoured");
        console.log("successfully moved.");
        location.reload();

      });

  });

});
