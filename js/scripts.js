//back end

function CreatePizza (size, toppings, sauce) { 
	this.sizeChk = size;
	this.toppingsChk = toppings;
	this.sauceChk = sauce;
	this.price = 0;
};

CreatePizza.prototype.amountDue = function (){
  if(this.sizeChk == "large"){
    this.price += 16.99;
    console.log(price)
  } else if (this.sizeChk == "medium"){
    this.price += 13.99;
  } else if (this.sizeChk == "small") {
  this.price += 10.99;
  } else {
  return "error";
}
  this.amountDue += (this.toppings * 1.50);
  return this.amountDue;
};


function Contact(firstNm, lastNm, cellNm) {
	this.firstNm = firstName,
	this.lastNm = lastName,
	this.cellNm = cellNum
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
		var sizeChk=[];
		var sauceChk=[];
		var toppingsChk=[];
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

	$('#submitOrder').click(function() {
		$('input[name="sizeOr"]:checked').each(function() {
			sizeChk.push(this.value);
			// console.log(sizeChk);
		});
	});
	$('#submitOrder').click(function() {
		$('input[name="sauceOr"]:checked').each(function() {
			sauceChk.push(this.value);
		});
	});				
	$('#submitOrder').click(function() {
		$('input[name="selection"]:checked').each(function() {
			toppingsChk.push(this.value);
			// console.log(toppingsChk)
		});
	});

var newOrder = new CreatePizza (sizeChk, toppingsChk, sauceChk);
priceTot = newOrder.amountDue();
	});
});

