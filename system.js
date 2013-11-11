// this is where we do work son

// need to keep track of gown types, sizes, and barcodes if possible
var c3_m=0;
var c3_l=0;
var c3_xl=0;
var c3_2xl=0;
var c3_3xl=0;
var eight_m=0;
var eight_l=0;
var eight_xl=0;
var eight_2xl=0;
var eight_3xl=0;


function tester(){
	c3_m = 5;
}
// var barcode = document.gown_processing.barcode.value;
// alert(barcode)


// alert(option.value)
// alert("Plugin is Running")
function update_total(){
	$("#c3_m").html(c3_m);
	$("#c3_l").html(c3_l);
	$("#c3_xl").html(c3_xl);
	$("#c3_2xl").html(c3_2xl);
	$("#c3_3xl").html(c3_3xl);
	$("#eight_m").html(eight_m);
	$("#eight_l").html(eight_l);
	$("#eight_xl").html(eight_xl);
	$("#eight_2xl").html(eight_2xl);
	$("#eight_3xl").html(eight_3xl);
}

// $("#c3_m").html(c3_m);

function reset_total(){
	c3_m =0;
	c3_l =0;
	c3_xl =0;
	c3_2xl =0;
	c3_3xl =0;
	eight_m =0;
	eight_l =0;
	eight_xl =0;
	eight_2xl =0;
	eight_3xl=0;

	update_total(); //refresh 
}


function toLaundry(){

	$('barcode').value = bar_number;
	barcode_change();
	update_gown();

}


// function toInventory(){
// 	console.log("I cant believe it worked");

// }

// function toHangar(){

// }

// function gown(number){
	
// }
document.addEventListener('DOMContentLoaded', update_total);
document.querySelector('#reset').addEventListener('click', reset_total);