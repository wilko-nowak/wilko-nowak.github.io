var modal = document.getElementById("modal");
var img = document.getElementById("profilbild");
var modalImg = document.getElementById("imgFull");
var span = document.getElementsByClassName("close")[0];

img.onclick = function() {
    modal.style.display = "flex"; 
    modalImg.src = this.src;
}

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function wechselbitte(){

    if (document.getElementById('ueberschrift').innerHTML === "Wilkommen") {
		selectedLanguage = 'en';
		document.querySelector(".übersetzung").classList.toggle("active");
		
        document.getElementById('Seite1').innerHTML = "Works";  
		document.getElementById('Seite2').innerHTML = "Biography";  
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Contact";  
		
		document.getElementById('ueberschrift').innerHTML = "Welcome";
		document.getElementById('ue1').innerHTML = "About me";
		document.getElementById('text1').innerHTML = "Currently, I am completing a dual study program at DHBW Friedrichshafen, Campus Fallenbrunnen.";
		document.getElementById('ue2').innerHTML = "My Biography";
		document.getElementById('th1').innerHTML = "Year";
		document.getElementById('th2').innerHTML = "Event";
		document.getElementById('td1').innerHTML = "Born in Eckernförde";
		document.getElementById('td2').innerHTML = "Graduated from secondary school";
		document.getElementById('td3').innerHTML = "Graduated from high school";
		document.getElementById('td4').innerHTML = "Started dual study program at DHBW Friedrichshafen";
    } 
	else {
		selectedLanguage = 'de';
		document.querySelector(".übersetzung").classList.toggle("active");
		
		document.getElementById('Seite1').innerHTML = "Werke";  
		document.getElementById('Seite2').innerHTML = "Biografie"; 
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Kontakt";
		
        document.getElementById('ueberschrift').innerHTML = "Wilkommen";
		document.getElementById('ue1').innerHTML = "Über mich";
		document.getElementById('text1').innerHTML = "Derzeit absolviere ich ein Duales Studium an der DHBW Friedrichshafen Campus Fallenbrunnen";
		document.getElementById('ue2').innerHTML = "Meine Biografie";
		document.getElementById('th1').innerHTML = "Jahr";
		document.getElementById('th2').innerHTML = "Ereignis";
		document.getElementById('td1').innerHTML = "Geboren in Eckernförde";
		document.getElementById('td2').innerHTML = "Abschluss der Realschule";
		document.getElementById('td3').innerHTML = "Abschluss des Abiturs";
		document.getElementById('td4').innerHTML = "Beginn des Dualen Studiums an der DHBW Friedrichshafen";
	}
	
	localStorage.setItem('language', selectedLanguage);
	
}

window.onload = function() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
        if (savedLanguage === 'en') {			
			document.querySelector(".übersetzung").classList.toggle("active");
			
            document.getElementById('Seite1').innerHTML = "Works";  
			document.getElementById('Seite2').innerHTML = "Biography";  
			document.getElementById('Seite3').innerHTML = "Audi A2";  
			document.getElementById('Seite4').innerHTML = "Contact";  
			
			document.getElementById('ueberschrift').innerHTML = "Welcome";
			document.getElementById('ue1').innerHTML = "About me";
			document.getElementById('text1').innerHTML = "Currently, I am completing a dual study program at DHBW Friedrichshafen, Campus Fallenbrunnen.";
			document.getElementById('ue2').innerHTML = "My Biography";
			document.getElementById('th1').innerHTML = "Year";
			document.getElementById('th2').innerHTML = "Event";
			document.getElementById('td1').innerHTML = "Born in Eckernförde";
			document.getElementById('td2').innerHTML = "Graduated from secondary school";
			document.getElementById('td3').innerHTML = "Graduated from high school";
			document.getElementById('td4').innerHTML = "Started dual study program at DHBW Friedrichshafen";
        }
		else {
            document.getElementById('Seite1').innerHTML = "Werke";  
			document.getElementById('Seite2').innerHTML = "Biografie"; 
			document.getElementById('Seite3').innerHTML = "Audi A2";  
			document.getElementById('Seite4').innerHTML = "Kontakt";
			
			document.getElementById('ueberschrift').innerHTML = "Wilkommen";
			document.getElementById('ue1').innerHTML = "Über mich";
			document.getElementById('text1').innerHTML = "Derzeit absolviere ich ein Duales Studium an der DHBW Friedrichshafen Campus Fallenbrunnen";
			document.getElementById('ue2').innerHTML = "Meine Biografie";
			document.getElementById('th1').innerHTML = "Jahr";
			document.getElementById('th2').innerHTML = "Ereignis";
			document.getElementById('td1').innerHTML = "Geboren in Eckernförde";
			document.getElementById('td2').innerHTML = "Abschluss der Realschule";
			document.getElementById('td3').innerHTML = "Abschluss des Abiturs";
			document.getElementById('td4').innerHTML = "Beginn des Dualen Studiums an der DHBW Friedrichshafen";
        }
    }
};	
