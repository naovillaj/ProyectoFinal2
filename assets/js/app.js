
var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
	
	if(divtext.id == "text1"){
		text1.style.display = "block";
		text2.style.display = "none";
		text3.style.display = "none";
		
	} else if(divtext.id == "text2"){
		text2.style.display = "block";
		text1.style.display = "none";
		text3.style.display = "none";
		

	} else if(divtext.id == "text3"){
		text3.style.display = "block";
		text1.style.display = "none";
		text2.style.display = "none";

	} 
	


}


function resultadoQuiz1(){

	var contar = 0;

	if(document.getElementById("p11").checked){
		contar++; 
	}

	if (document.getElementById("p15").checked){
		contar++;
	}
	if (document.getElementById("p19").checked){
		contar++;
	} 

	document.getElementById("cuestionario").innerHTML= "Tienes " + contar + " correctas";
	
}

 function resultadoQuiz2(){
	var contar = 0;

	if(document.getElementById("p2").checked){
		contar++; 
	}
	if (document.getElementById("p4").checked){
		contar++;
	}
	if (document.getElementById("p8").checked){
		contar++;
	} 

	document.getElementById("cuestionario2").innerHTML= "Tienes " + contar + " correctas";
	
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