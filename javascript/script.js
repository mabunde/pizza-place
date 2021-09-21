function Cart(size, crust, topping) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

Cart.prototype.getCrust = function () {
  if (this.crust === 200) {
      return 200
  } else if (this.crust === 300) {
      return 300
  } else if (this.crust === 250) {
      return 250
  }
}

Cart.prototype.getTopping = function () {
  if (this.topping === 0) {
      return 150
  } else if (this.topping === 1) {
      return 100
  } else if (this.topping === 2) {
      return 150
  } else if (this.topping === 3) {
      return 100
  }
  else if (this.topping === 4) {
      return 180
  }

}
Cart.prototype.getSize = function () {

  var count = $("#type :selected").length; 

  if (this.type == 0) {
      if (count === 0) {
          return 650
      } else if (count === 1)
          return 850
      else {
          return 1200
      }
  } else if (this.type == 1) {
      if (count === 0) {
          return 500
      } else if (count === 1)
          return 900
      else {
          return 1400
      }

  } else if (this.type == 2) {
      if (count === 0) {
          return 500
      } else if (count === 1)
          return 1000
      else {
          return 2000
      }

  } else if (this.type == 3) {
      if (count === 0) {
          return 650
      } else if (count === 1)
          return 1500
      else {
          return 2500
      }
      
  }  else if (this.type == 4) {
      if (count === 0) {
          return 550
      } else if (count === 1)
          return 950
      else {
          return 1800
      }
  } else if (this.type == 5) {
      if (count === 0) {
          return 500
      } else if (count === 1)
          return 750
      else {
          return 2200
      }
  } else {
      return false;
  }  
}

function totalCal() {
  var sum = 0;
  $("#totalPerOrder").each(function () {
      var cost = $(this).text();
      if (!isNaN(cost) && cost.length != 0) {
          sum += parseFloat(cost);
      }
  });
  if (document.getElementById('yes').checked) {
      var result = "Your order is Ksh. " + sum + " delivery charge is 150ksh";
      var address = document.getElementById("address").value;
      var bill = sum + 150;
      var totalCost = "Total: Ksh. " + bill + " .00";
      $('#outcome').text(result);
      $('#totalCost').text(totalCost);
      swal({
          title: "Your order will be delivered to " + address,
      })

  } else {
      var total = "Total: Ksh. " + sum + " .00";
      $('#totalCost').text(total)
  }
}

function checkout() {
  swal({
      title: "Order successfully placed." + "\r\n" + "Order again",  
  }).then((value) => {
    actualAdress.reload();
  });
}
  
  $(document).ready(function () {
    $('.radioBtn').change(function () {
      if (document.getElementById("yes").checked) {
          $('.actualAdress').show();
      } else {
          $('.actualAdress').hide();
      }
  });

  $('#toCart').click(function () {
      var size = $('#size option:selected').val();
      var crust = $('#crust option:selected').val();
      var quantity = $('#qty').val();
      var topping = $('#topping option:selected').val();

      if ( size == '' || crust == '' || topping == '' || quantity == '') {
          alert('Fill in all fields to complete an order')
      } else if (document.getElementById("yes").checked && $('#address').val() == '') {
          alert('Please enter your Address')
      } else {
          var selectedSize = parseInt($('#size option:selected').val());
          var selectedCrust = parseInt($('#crust option:selected').val());
          var quantity = parseInt($('#qty').val());
          var selectedTopping = parseInt($('#topping option:selected').val());
          var placeOrder = new Cart(selectedSize, selectedCrust, selectedTopping);
          var yourBill = (placeOrder.getSize() + placeOrder.getCrust() + placeOrder.getTopping()) * quantity
          $('.display').show();
          $(".table tbody:last").append("<tr>" +
              "<td>" + $('#size option:selected').text() + "</td>" +
              "<td>" + $('#crust1 option:selected').text() + "</td>" +
              "<td>" + $('#type option:selected').text() + "</td>" +
              "<td>" + $('#qty').val() + "</td>" +
              "<td><span class='totalPerOrder'>" + yourBill + "</span></td>" +
              "</tr>");
          $(totalCal);

      }
  });
  
  

  $('#checkout').click(function () {
      checkout();
  });
});
