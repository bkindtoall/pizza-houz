
var largeSz = { name: "largeSz", price: 16.99};
var mediumSz = { name: "mediumSz", price: 13.99};
var smallSz = { name: "smallSz", price: 10.99};

var bacon = { name: "bacon", price: 1.50};
var sausage = { name: "sausage", price: 1.50};

var tomatoes = { name: "tomatoes", price: 1.50};
var mushrooms = { name: "mushrooms", price: 1.50};

var bbq = { name: "bbq"};
var red = { name: "red"};

var mozzarella = { name: "mozzarella"};
var feta = { name: "feta"};



//User Interface Logic --
$(document).ready(function() {

	$("form#customOrder").submit(function(event) {
	event.preventDefault();
	var firstNm = $("input#first").val();
	var lastNm = $("input#last").val();
  	});
});
