// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// Everything below this line is user interface logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const addition = add(number1, number2);
    $("#addresult").text(addition);
  });
});

$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const sub = subtract(number1, number2);
    $("#subtractresult").text(sub);
  });
});

$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#multi1").val());
    const number2 = parseInt($("#multi2").val());
    const multi = multiply(number1, number2);
    $("#multiplyresult").text(multi);
  });
});

$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const div = divide(number1, number2);
    $("#divideresult").text(div);
  });
});