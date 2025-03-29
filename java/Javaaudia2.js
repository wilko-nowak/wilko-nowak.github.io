window.onload = function() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
         if (savedLanguage === 'en') {
			document.querySelector(".übersetzung").classList.toggle("active");
			
			document.getElementById('Seite1').innerHTML = "Works";  
			document.getElementById('Seite2').innerHTML = "Biography";  
			document.getElementById('Seite3').innerHTML = "Audi A2";  
			document.getElementById('Seite4').innerHTML = "Contact";  
			
			document.getElementById('ueberschrift').innerHTML = "The Audi A2";
			document.getElementById('S1').innerHTML = "Dear Audi A2 owners,";
			document.getElementById('S21').innerHTML = "if you also drive an Audi A2, I have some exciting news for you. If you're looking for inspiration for modifications or repairs, I warmly invite you to visit my user account";
			document.getElementById('S22').innerHTML = "on the Audi A2 forum. There, you'll find some ideas that could help you with topics like wheel cap repairs or the sound system. I look forward to your visit and to fostering the exchange of our shared interests.";
			document.getElementById('S3').innerHTML = "Best regards";
			document.getElementById('S4').innerHTML = "Feel free to check out a video about the Audi A2";
		} 
		else {
			
			
			document.getElementById('Seite1').innerHTML = "Werke";  
			document.getElementById('Seite2').innerHTML = "Biografie"; 
			document.getElementById('Seite3').innerHTML = "Audi A2";  
			document.getElementById('Seite4').innerHTML = "Kontakt";
			
			document.getElementById('ueberschrift').innerHTML = "Der Audi A2";
			document.getElementById('S1').innerHTML = "Sehr geehrte Audi A2-Fahrer,";
			document.getElementById('S21').innerHTML = "wenn Sie ebenfalls einen Audi A2 fahren, habe ich erfreuliche Nachrichten für Sie. Sollten Sie Inspiration für Umbauten oder Reparaturen benötigen, lade ich Sie herzlich ein, mein Benutzerkonto";
			document.getElementById('S22').innerHTML = "im Audi A2 Forum zu besuchen. Dort finden Sie einige Ideen, die Ihnen bei Themen wie Radkappenreparaturen oder dem Soundsystem helfen können. Ich freue mich auf Ihren Besuch und darauf, den Austausch über unsere gemeinsamen Interessen zu fördern.";
			document.getElementById('S3').innerHTML = "Beste Grüße";
			document.getElementById('S4').innerHTML = "Sehen Sie sich auch gerne ein Video über den Audi A2 an";
		}
    }
};

function wechselbitte(){

    if (document.getElementById('ueberschrift').innerHTML === "Der Audi A2") {
        selectedLanguage = 'en';
		document.querySelector(".übersetzung").classList.toggle("active");
		
		document.getElementById('Seite1').innerHTML = "Works";  
		document.getElementById('Seite2').innerHTML = "Biography";  
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Contact";  
		
		document.getElementById('ueberschrift').innerHTML = "The Audi A2";
		document.getElementById('S1').innerHTML = "Dear Audi A2 owners,";
		document.getElementById('S21').innerHTML = "if you also drive an Audi A2, I have some exciting news for you. If you're looking for inspiration for modifications or repairs, I warmly invite you to visit my user account";
		document.getElementById('S22').innerHTML = "on the Audi A2 forum. There, you'll find some ideas that could help you with topics like wheel cap repairs or the sound system. I look forward to your visit and to fostering the exchange of our shared interests.";
		document.getElementById('S3').innerHTML = "Best regards";
		document.getElementById('S4').innerHTML = "Feel free to check out a video about the Audi A2";
    } 
	else {
		selectedLanguage = 'de';
		document.querySelector(".übersetzung").classList.toggle("active");
		
		document.getElementById('Seite1').innerHTML = "Werke";  
		document.getElementById('Seite2').innerHTML = "Biografie"; 
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Kontakt";
		
        document.getElementById('ueberschrift').innerHTML = "Der Audi A2";
		document.getElementById('S1').innerHTML = "Sehr geehrte Audi A2-Fahrer,";
		document.getElementById('S21').innerHTML = "wenn Sie ebenfalls einen Audi A2 fahren, habe ich erfreuliche Nachrichten für Sie. Sollten Sie Inspiration für Umbauten oder Reparaturen benötigen, lade ich Sie herzlich ein, mein Benutzerkonto";
		document.getElementById('S22').innerHTML = "im Audi A2 Forum zu besuchen. Dort finden Sie einige Ideen, die Ihnen bei Themen wie Radkappenreparaturen oder dem Soundsystem helfen können. Ich freue mich auf Ihren Besuch und darauf, den Austausch über unsere gemeinsamen Interessen zu fördern.";
		document.getElementById('S3').innerHTML = "Beste Grüße";
		document.getElementById('S4').innerHTML = "Sehen Sie sich auch gerne ein Video über den Audi A2 an";
	}
	
	localStorage.setItem('language', selectedLanguage);
}
	