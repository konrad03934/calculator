'use strict';

var hold = document.getElementById('display').value;

//functions for buttons

function addContent() {
	if (document.getElementById('display').value != 0 || document.getElementById('display').value == "0.") {
		document.getElementById('display').value += this.value;
	} else {
		document.getElementById('display').value = this.value;
	}
//	var hold = document.getElementById('display').value;
//	console.log(hold);
}

document.querySelectorAll('.numb').forEach(function(element) {
	element.onclick = addContent;
});

	

//jeżeli bez for each to get element do wszystkich id
//document.getElementById('7').addEventListener('click', addContent);

function addValueC() {
	
	if (document.getElementById('display').value == 0) {
		document.getElementById('display').value = "0" + document.getElementById('comma').value;	
	} else if (document.getElementById('display').value.indexOf(".") == -1) {
		document.getElementById('display').value += document.getElementById('comma').value;
	} 
	else {
//nic nie rób
	}
	
}


//function dla znaków
function addSign() {
	document.getElementById('display').value += this.value;
}


document.querySelectorAll('.sign').forEach(function(element) {
	element.onclick = addSign;
});


//procenty
function percent() {
	var liczba = document.getElementById('display').value;
	var afterComma = liczba.substr(liczba.indexOf("*") + 1);
	afterComma = "0." + afterComma;
	var beforeComma = liczba.substr(0, liczba.indexOf("*"));
		
//	console.log(afterComma);
//	console.log(beforeComma);
	var obliczam = Number(afterComma) * Number(beforeComma);
	document.getElementById('display').value = obliczam;
}
document.getElementById('per').addEventListener('click',percent);


//przycisk AC
function remove() {
	document.getElementById('display').value = null;
}

document.getElementById('AC').addEventListener('click', remove);

//funkcja wykonawcza
function doThis() {
	var score = eval(document.getElementById('display').value);
	document.getElementById('display').value = score;
}
document.getElementById('evaluate').addEventListener('click', doThis);





	





