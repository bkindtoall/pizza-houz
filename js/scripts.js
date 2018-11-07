// //objects being fed through constructor myOrder
// var largeSz = { name: "largeSz", price: 16.99};
// var mediumSz = { name: "mediumSz", price: 13.99};
// var smallSz = { name: "smallSz", price: 10.99};

// var bacon = { name: "bacon", price: 1.50};
// var sausage = { name: "sausage", price: 1.50};
// var canadianHam = { name: "canadianHam", price: 1.50};

// var tomatoes = { name: "tomatoes", price: 1.50};
// var mushrooms = { name: "mushrooms", price: 1.50};
// var spinach = { name: "spinach", price: 1.50};

// var bbq = { name: "bbq"};
// var red = { name: "red"};
// var white = { name: "white", price: 1.50};

// var mozzarella = { name: "mozzarella"};
// var feta = { name: "feta", price: 1.50};
// var parmesan = { name: "parmesan", price: 1.50};


function CreatePizza(size, toppings, sauce) { 
	this.sizeChk = size;
	this.toppingsChk = toppings;
	this.sauceChk = sauce;
	this.price = 0;
};

CreatePizza.prototype.price = function (){
  if(this.sizeChk == "large"){
    this.price += 16.99;
  } else if (this.sizeChk == "medium"){
    this.price += 13.99;
  } else if (this.sizeChk == "small") {
  this.price += 10.99;
}; 
// else {
  // alert("Please Pick a Pizza Size!")
  // document.return()
// }
  this.price += this.toppings;
  return this.price
};


// CreatePizza.prototype.fullOrder() {
// 	return "Your order: Size " + this.size 
// }

function Contact(firstNm, lastNm, cellNm) {
	this.firstNm = firstName,
	this.lastNm = lastName,
	this.cellNm = CellNum
};

Contact.prototype.fullName = function() {
	return this.firstName + " " + this.lastName;
};

//user interface

$(document).ready(function() {
	$("form#name").submit(function(event) {
		event.preventDefault();
		var firstNm = $("input#first").val();
		var lastNm = $("input#last").val();
		var cellNm = $("input#cell").val();
		// var newContact = new Contact(firstNm, lastNm, cellNm);
		var	street = $("input#street").val();
		var city = $("input#city").val();
		var state = $("input#state").val();
		var zip = $("input#zip").val();
		// var newAddress = new Address(street, city, state, zip);
		// displayContactDetails(customerInfo);
		// displayAddressDetails(deliveryInfo);
	});
	$('#submitDelivery').click(function() {
		var deliveryChk=[];
		$('input[name="deliveryOr"]:checked').each(function() {
			deliveryChk.push(this.value);
	
		});
			if (deliveryChk == "deliver") {
			$("#deliverForm").show("slow");
			$("#submitDelivery").hide();
			$("#contact").hide();
			} else if (deliveryChk == "takeOut") {
			$("#deliverForm").show("slow");
			$("#contact").show();
			$("#submitDelivery").hide();
			} else if (deliveryChk == "eatIn") {
			$("#contact").show("slow");
			$("#deliverForm").hide();
			$("#submitDelivery").hide();
			}
	});
	$('#submitOrder').click(function() {
		var sizeChk=[];
		$('input[name="sizeOr"]:checked').each(function() {
			sizeChk.push(this.value);
			// console.log(sizeChk)
		});
	});
	$('#submitOrder').click(function() {
		var sauceChk=[];
		$('input[name="sauceOr"]:checked').each(function() {
			sauceChk.push(this.value);
			// console.log(sauceChk)
		});
	});				
	$('#submitOrder').click(function() {
		var toppingsChk=[];
		$('input[name="selection"]:checked').each(function() {
			toppingsChk.push(this.value);
			// console.log(toppingsChk)
		});
	});
});

