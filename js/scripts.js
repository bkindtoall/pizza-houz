//objects being fed through constructor myOrder
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

// function onlyOne(checkbox) {
//     var deliveryChk = document.getElementsByName('deliveryOr')
//     deliveryChk.forEach((item) => {
//         if (item !== checkbox) item.checked = false
//     })
// }

	var deliveryChk = document.getElementsByName('deliveryOr');	
	var deliveryStatus;
	
	for(var i=0; i < deliveryChk.length; i++) {
        if(deliveryChk[i].checked){
            deliveryStatus = deliveryChk[i].value;
        }
	}        

//User Interface Logic --
$(document).ready(function() {
	// $("#customOrder input:checkbox").change(function() {
	//     $("#customOrder input:checkbox").attr("checked", false);
	//     $(this).attr("checked", true);
	// });

	$("form#customOrder").submit(function(event) {
	event.preventDefault();
	var firstNm = $("input#first").val();
	var lastNm = $("input#last").val();
  	});
  	
});
