//objects being fed through constructor myOrder
var largeSz = { name: "largeSz", price: 16.99};
var mediumSz = { name: "mediumSz", price: 13.99};
var smallSz = { name: "smallSz", price: 10.99};

var bacon = { name: "bacon", price: 1.50};
var sausage = { name: "sausage", price: 1.50};
var canadianHam = { name: "canadianHam", price: 1.50};

var tomatoes = { name: "tomatoes", price: 1.50};
var mushrooms = { name: "mushrooms", price: 1.50};
var spinach = { name: "spinach", price: 1.50};

var bbq = { name: "bbq"};
var red = { name: "red"};
var white = { name: "white", price: 1.50};

var mozzarella = { name: "mozzarella"};
var feta = { name: "feta", price: 1.50};
var parmesan = { name: "parmesan", price: 1.50};


var myPizza;

function myPizza() {
	var size
	var meat
	var veggie
	var sauce
	var cheese
}

// var pizza;

//pizza constructor
function Pizza(sizeStatus, meat, veggie, sauceStatus, cheese) { 
	this.sizeStatus = sizeStatus;
	this.meat = meat;
	this.veggie = veggie;
	this.sauceStatus =sauceStatus;
	this.cheese = cheese;
}

//user interface

$(document).ready(function() {
	$("form#name").submit(function(event) {
		event.preventDefault();
		var firstNm = $("input#first").val();
		var lastNm = $("input#last").val();
		var cellNm = $("input#cell").val();
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

