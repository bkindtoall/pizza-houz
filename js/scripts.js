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
function Pizza(size, meat, veggie, sauce, cheese) { 
	this.size = size;
	this.meat = meat;
	this.veggie = veggie;
	this.sauce =sauce;
	this.cheese = cheese;
}

//from user interface
	var deliveryChk = document.getElementsByName('deliveryOr');	
	var deliveryStatus;
	
	for(var i=0; i < deliveryChk.length; i++) {
        if(deliveryChk[i].checked){
            deliveryStatus = deliveryChk[i].value;
        }
	}        
	var sizeChk = document.getElementsByName('sizeOr');	
	var sizeStatus;
	
	for(var i=0; i < sizeChk.length; i++) {
        if(sizeChk[i].checked){
            sizeStatus = sizeChk[i].value;
        }
	}  
	var sauceChk = document.getElementsByName('sauceOr');	
	var sauceStatus;
	
	for(var i=0; i < sauceChk.length; i++) {
        if(sauceChk[i].checked){
            sauceStatus = sauceChk[i].value;
        }
	}        	      
	var deliveryChk = document.getElementsByName('deliveryOr');	
	var deliveryStatus;
	
	for(var i=0; i < deliveryChk.length; i++) {
        if(deliveryChk[i].checked){
            deliveryStatus = deliveryChk[i].value;
        }
	}        

$(document).ready(function() {
	$("form#customOrder").submit(function(event) {
	event.preventDefault();
	var firstNm = $("input#first").val();
	var lastNm = $("input#last").val();
  	});
  	
});
