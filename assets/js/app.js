
/*var mo = function(){
	var t1 = document.getElementById("text1");
	var t2 = document.getElementById("text2");
	var t3 = document.getElementById("text3");

	if(t1.style.display == "none"){
		t1.style.display = "block";
		t2.style.display = "none";
		t3.style.display = "none";
		//return false;

	} else if(t2.style.display == "none"){
		t2.style.display = "block";
		t1.style.display = "none";
		t3.style.display = "none";
		//return false;

	} else if(text3.style.display == "none"){
		t3.style.display = "block";
		t1.style.display = "none";
		t2.style.display = "none";
		//return false;

	} 
	


}*/



var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	if (divtext.style.display == "none" ) {
		divtext.style.display = "block";
	} 
		else{
		divtext.style.display = "none";
	}
}


var resultadoQuiz = function(){
	var contar = 0;

	if(document.getElementById("p2").checked.value){
		contar++;
	}else if (document.getElementById("p4").checked.value){
		contar++;
	}else if (document.getElementById("p8").checked.value){
		contar++;
	} 

	document.getElementById("cuestionario").innerHTML= "Tienes" + contar + "correctas";
	
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}