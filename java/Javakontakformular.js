window.onload = function() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
        if (savedLanguage === 'en') {			
			document.querySelector(".übersetzung").classList.toggle("active");
			
            document.getElementById('Seite1').innerHTML = "Works";  
            document.getElementById('Seite2').innerHTML = "Biography";  
            document.getElementById('Seite3').innerHTML = "Audi A2";  
            document.getElementById('Seite4').innerHTML = "Contact";  

            document.getElementById('ueberschrift').innerHTML = "Contact Me";
            document.getElementById('TZ').innerHTML = "Get in Touch!";
            document.getElementById('frage1').innerHTML = "What is it about?";
            document.getElementById('frage11').innerHTML = "Please select...";
            document.getElementById('f1').innerHTML = "Audi A2";
            document.getElementById('f2').innerHTML = "Other";
            document.getElementById('f3').innerHTML = "Website";
            document.getElementById('f4').innerHTML = "Works";
            document.getElementById('frage2').innerHTML = "First Name:";
            document.getElementById('frage3').innerHTML = "Last Name:";
            document.getElementById('frage4').innerHTML = "Email:";
            document.getElementById('frage5').innerHTML = "Message:";
            document.getElementById('senden').innerHTML = "Submit";
        }
		else {
            document.getElementById('Seite1').innerHTML = "Werke";  
            document.getElementById('Seite2').innerHTML = "Biografie"; 
            document.getElementById('Seite3').innerHTML = "Audi A2";  
            document.getElementById('Seite4').innerHTML = "Kontakt";

            document.getElementById('ueberschrift').innerHTML = "Kontaktaufnahme";
            document.getElementById('TZ').innerHTML = "Kontaktieren Sie mich!";
            document.getElementById('frage1').innerHTML = "Worum geht es?";
            document.getElementById('frage11').innerHTML = "Bitte wählen...";
            document.getElementById('f1').innerHTML = "Audi A2";
            document.getElementById('f2').innerHTML = "Sonstiges";
            document.getElementById('f3').innerHTML = "Webseite";
            document.getElementById('f4').innerHTML = "Werke";
            document.getElementById('frage2').innerHTML = "Vorname:";
            document.getElementById('frage3').innerHTML = "Nachname:";
            document.getElementById('frage4').innerHTML = "Email:";
            document.getElementById('frage5').innerHTML = "Nachricht:";
            document.getElementById('senden').innerHTML = "Senden";
        }
    }
};

function wechselbitte(){
		
    if (document.getElementById('ueberschrift').innerHTML === "Kontaktaufnahme") {
        selectedLanguage = 'en';
		document.querySelector(".übersetzung").classList.toggle("active");
		
		document.getElementById('Seite1').innerHTML = "Works";  
		document.getElementById('Seite2').innerHTML = "Biography";  
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Contact";  
		
		document.getElementById('ueberschrift').innerHTML = "Contact Me";
		document.getElementById('TZ').innerHTML = "Get in Touch!";
		document.getElementById('frage1').innerHTML = "What is it about?";
		document.getElementById('frage11').innerHTML = "Please select...";
		document.getElementById('f1').innerHTML = "Audi A2";
		document.getElementById('f2').innerHTML = "Other";
		document.getElementById('f3').innerHTML = "Website";
		document.getElementById('f4').innerHTML = "Works";
		document.getElementById('frage2').innerHTML = "First Name:";
		document.getElementById('frage3').innerHTML = "Last Name:";
		document.getElementById('frage4').innerHTML = "Email:";
		document.getElementById('frage5').innerHTML = "Message:";
		document.getElementById('senden').innerHTML = "Submit";
    } 
	else {
		selectedLanguage = 'de';
		document.querySelector(".übersetzung").classList.toggle("active");
		
		document.getElementById('Seite1').innerHTML = "Werke";  
		document.getElementById('Seite2').innerHTML = "Biografie"; 
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Kontakt";
		
        document.getElementById('ueberschrift').innerHTML = "Kontaktaufnahme";
		document.getElementById('TZ').innerHTML = "Kontaktieren Sie mich!";
		document.getElementById('frage1').innerHTML = "Worum geht es?";
		document.getElementById('frage11').innerHTML = "Bitte wählen...";
		document.getElementById('f1').innerHTML = "Audi A2";
		document.getElementById('f2').innerHTML = "Sonstiges";
		document.getElementById('f3').innerHTML = "Webseite";
		document.getElementById('f4').innerHTML = "Werke";
		document.getElementById('frage2').innerHTML = "Vorname:";
		document.getElementById('frage3').innerHTML = "Nachname:";
		document.getElementById('frage4').innerHTML = "Email:";
		document.getElementById('frage5').innerHTML = "Nachricht:";
		document.getElementById('senden').innerHTML = "Senden";
    }
	
	localStorage.setItem('language', selectedLanguage);
	
}