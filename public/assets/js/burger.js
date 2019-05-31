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

});
