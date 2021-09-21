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
      else if (count===2) {
          return 1200
      }
  }  
}

function totalCal() {
  var sum = 0;
  $(".totalPerOrder").each(function () {
      var cost = $(this).text();
      if (!isNaN(cost) && cost.length != 0) {
          sum += parseFloat(cost);
      }
  });
  if (document.getElementById('yes').checked) {
      var result = "Your order is Ksh. " + sum + " delivery charge is 150ksh";
      var address = document.getElementById("address").value;
      var bill = sum + 150;
      var totalCost1 = "Total: Ksh. " + bill + " .00";
      $('#outcome').text(result);
      $('#totalCost').text(totalCost1);
      alert("Your order will be delivered to " + address) 
      

  } else {
      var total = "Total: Ksh. " + sum + " .00";
      $('#totalCost').text(total)
  }
  Event.preventDefault()

}

function checkout() {
  alert("Order successfully placed." + "\r\n" + "Order again"  
).then((value) => {
    actualAdress.reload();
  });
}
  
  $(document).ready(function () {
    $('.pick').change(function () {
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
          var selectedTopping = parseInt($('#type option:selected').val());
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
