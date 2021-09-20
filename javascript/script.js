$(document).ready(function () {
  $("#delivery").submit(function () {
    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert(
      "Hello " +
        name +
        "  . Your order has been successfuly received and Your order will be delivered to " +
        location +
        " within one 30 minutes .The delivery will cost ksh  Thank you for chosing us as your pizza place."
    );
  });
});
