//back end
var price = [];

function CreatePizza (sizeChk, toppingsChk, price) { 
	this.sizeChk = sizeChk;
	this.toppingsChk = toppingsChk.length;
	// this.sauceChk = sauceChk;
	this.price = 0;
};

CreatePizza.prototype.amountDue = function (){
	if(this.sizeChk == "large"){
		this.price += 16;
	} else if (this.sizeChk == "medium"){
		this.price += 13;
	} else if (this.sizeChk == "small") {
		this.price += 10;
	} else {
		return "error";
	}
	this.price += (this.toppingsChk * 2);
		return this.price;
		console.log(amountDue);
};


// function Contact(firstNm, lastNm, cellNm) {
// 	this.firstNm = firstName,
// 	this.lastNm = lastName,
// 	this.cellNm = cellNum
// };

// Contact.prototype.fullName = function() {
// 	return this.firstName + " " + this.lastName;
// };

// //user interface

$(document).ready(function() {
	$("form#name").submit(function(event) {
		event.preventDefault();
		// var firstNm = $("input#first").val();
		// var lastNm = $("input#last").val();
		// var cellNm = $("input#cell").val();
		// // var newContact = new Contact(firstNm, lastNm, cellNm);
		// var	street = $("input#street").val();
		// var city = $("input#city").val();
		// var state = $("input#state").val();
		// var zip = $("input#zip").val();
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
		var sizeChk;
		var toppingsChk=[];
		// var sauceChk=[];
		$('input[name="sizeOr"]:checked').each(function() {
			sizeChk=this.value;
		// console.log(sizeChk);
		});
		$('input[name="selection"]:checked').each(function() {
			toppingsChk.push(this.value);
		// console.log(toppingsChk)
		});

	var newOrder = new CreatePizza (sizeChk, toppingsChk);
	var priceTot = newOrder.amountDue();
	$("#boxesChecked").text("Amount due on this order: $" + priceTot);
	});
});
