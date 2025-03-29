document.getElementById("acceptCookies").addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true"); 
    document.getElementById("cookieConsent").style.display = "none"; 
});

if (localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookieConsent").style.display = "none"; 
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

            document.getElementById('ueberschrift').innerHTML = "Steel with Soul";
			document.getElementById('ue1').innerHTML = "My Works";
        }
		else {
            document.getElementById('Seite1').innerHTML = "Werke";  
            document.getElementById('Seite2').innerHTML = "Biografie"; 
            document.getElementById('Seite3').innerHTML = "Audi A2";  
            document.getElementById('Seite4').innerHTML = "Kontakt";

            document.getElementById('ueberschrift').innerHTML = "Stahl mit Seele";
			document.getElementById('ue1').innerHTML = "Meine Werke";
        }
    }
};

function wechselbitte(){
	let selectedLanguage;
    if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		selectedLanguage = 'en';
		document.querySelector(".übersetzung").classList.toggle("active");
        document.getElementById('Seite1').innerHTML = "Works";  
		document.getElementById('Seite2').innerHTML = "Biography";  
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Contact";  
		
		document.getElementById('ueberschrift').innerHTML = "Steel with Soul";
		document.getElementById('ue1').innerHTML = "My Works";		
    } 
	else {
		selectedLanguage = 'de';
		document.querySelector(".übersetzung").classList.toggle("active");
		document.getElementById('Seite1').innerHTML = "Werke";  
		document.getElementById('Seite2').innerHTML = "Biografie"; 
		document.getElementById('Seite3').innerHTML = "Audi A2";  
		document.getElementById('Seite4').innerHTML = "Kontakt";
		
        document.getElementById('ueberschrift').innerHTML = "Stahl mit Seele";
		document.getElementById('ue1').innerHTML = "Meine Werke";
	}
	
	localStorage.setItem('language', selectedLanguage);
	
}

function scrollToTopIfNeeded(werkId) {
    if (window.innerWidth > 768) { 
        if (werkId === 1 || werkId === 2 || werkId === 3) {
            const circle = document.getElementById(`werk${werkId}`).getBoundingClientRect();
            const circleCenterY = circle.top + (circle.height / 2);
            const scrollOffset = window.scrollY + circleCenterY - (window.innerHeight / 2);

            window.scrollTo({
                top: scrollOffset,
                behavior: 'smooth' 
            });
        }
    }
}



function scrollToBottomIfNeeded(werkId) {
    if (window.innerWidth > 768) { 
        if (werkId === 4 || werkId === 5 || werkId === 6) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth' 
            });
        }
    }
}

function zentriereKreis(werkId) {
    const circle = document.getElementById(`werk${werkId}`);
    const circleRect = circle.getBoundingClientRect();
    const circleCenterY = circleRect.top + (circleRect.height / 2);    
    if (window.innerWidth <= 768) {
        const scrollOffset = window.scrollY + circleCenterY - (window.innerHeight / 2);
        
        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth' 
        });
    }
}

function zeigeWerkInfo(werkId) {
	
	let description1;
	if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		description1 = "Dieses Werk, das erste der &quot;Schaufel &quot;-Serie, thematisiert die Verschmelzung von Wesen. Die Erschaffung eines &quot;Hund-Wildschwein-Hybriden&quot; steht sinnbildlich für die kreativen Möglichkeiten des Menschen, wirft jedoch zugleich kritische ethische Fragen auf. Das Werk lädt zur Reflexion über die Verantwortung ein, die mit solch tiefgreifenden Eingriffen in die Natur einhergehen.";
	}
	else{
		description1 = "This work, the first in the &quot;Shovel&quot; series, addresses the merging of beings. The creation of a &quot;dog-wild boar hybrid&quot; symbolizes the creative possibilities of mankind, but also raises critical ethical questions. The piece invites reflection on the responsibility that comes with such profound interventions in nature.";
	}
	
	let description2;
	if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		description2 = "Inspiriert von E.T.A. Hoffmanns düsterer Erzählung &quot;Der Sandmann &quot; stellt dieses Werk nicht nur eine Hommage an die geheimnisvolle und mysteriöse Welt der Novelle dar, sondern ist zugleich eine ganz persönliche Interpretation. &quot;Die Sandfrau&quot; verarbeitet meine eigenen Erfahrungen, die ich im Leben sammeln musste, und verbindet sie mit den Themen der Erzählung. Die Grenzen zwischen Realität und Illusion, die Hoffmann in seiner Geschichte zeichnet, spiegeln sich in meinen eigenen Erlebnissen wider, in denen die Dunkelheit und Unsicherheit des Lebens oft die klare Sicht auf das Wesentliche trübte.";
	}
	else{
		 description2 = "Inspired by E.T.A. Hoffmann's dark tale &quot;The Sandman&quot;, this work is not only a tribute to the mysterious and enigmatic world of the novella, but also a deeply personal interpretation. &quot;The Sand Woman&quot; processes my own experiences that I have had to gather in life and connects them with the themes of the story. The boundaries between reality and illusion that Hoffmann draws in his tale are reflected in my own experiences, in which the darkness and uncertainty of life often clouded the clear view of what is truly important.";
	}
	
	let description3;
	if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		description3 = "Als zweites Werk der &quot;Schaufel&quot;-Serie entstand &quot;Puffel&quot; in einem Moment tiefer Trauer und Reflexion, nur einen Tag nach dem Verlust eines geliebten Familienmitglieds – des treuen Hundes der befleckten Familie. Dieses Werk fängt die Gefühle von Verlust, Liebe und Erinnerung ein, die in solchen Momenten oft überwältigend sind. Es ist ein Denkmal der Vergänglichkeit des Lebens, aber auch der ewigen Verbindung, die über den Tod hinaus bestehen bleibt. &quot;Puffel&quot; ist eine physische Darstellung der Beziehung zwischen Mensch und Tier, die eine tiefe Rille hinterlässt.";
	}		
	else{
		description3 = "As the second work in the &quot;Shovel&quot; series, &quot;Puffel&quot; was created in a moment of deep grief and reflection, just a day after the loss of a beloved family member – the loyal dog of the family. This work captures the emotions of loss, love, and memory that are often overwhelming in such moments. It is a monument to the transience of life, but also to the eternal connection that remains beyond death. &quot;Puffel&quot; is a physical representation of the relationship between human and animal, leaving a deep groove behind.";
	}
	
	let description4;
	if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		description4 = "&quot;Mr.π&quot; steht symbolisch für die Vorstellung von unendlicher Freundschaft. Entstanden kurz nach &quot;Puffel&quot; greift es das Konzept der Unendlichkeit auf, das durch das mathematische Symbol π verkörpert wird – eine Zahl, die niemals endet. Es ist ein Tribut an die ewige Verbindung auch über den Tod hinaus. In diesem Werk geht es um die Überwindung von Grenzen und die Kraft wahrer Freundschaft, die weder Raum noch Zeit beschränken können.";
	}
	else{
			description4 = "&quot;Mr.π&quot; symbolizes the concept of infinite friendship. Created shortly after &quot;Puffel&quot;, it explores the concept of infinity, embodied by the mathematical symbol π – a number that never ends. It is a tribute to the eternal connection that transcends even death. This work is about overcoming boundaries and the power of true friendship, which can be neither limited by space nor time.";
	}
	
	let description5;
	if (document.getElementById('ueberschrift').innerHTML === "Stahl mit Seele") {
		description5 = "&quot;Optimum Prime&quot; wurde für eine Ausstellung an meiner alten Schule geschaffen und lud die Betrachter ein, ihrer Kreativität freien Lauf zu lassen. Die Namensgebung erfolgte durch Mitschüler verschiedener Jahrgänge, die ihre eigenen Interpretationen und Visionen einbrachten. Das Werk selbst und der kreative Entstehungsprozess standen dabei im Mittelpunkt – ein Zusammenspiel aus Assoziationen, Gedanken und Inspirationen, das zu vielfältigen Bedeutungen und Perspektiven führte.";
	}
	else{
		description5 = "&quot;Optimum Prime&quot; was created for an exhibition at my former school and invited viewers to unleash their creativity. The name was chosen by classmates from different year groups, each contributing their own interpretations and visions. The artwork itself and the creative process were the focus – a combination of associations, thoughts, and inspirations that led to various meanings and perspectives.";
	}
	
	const werkDetails = {
		werk1: {
			title: "Hund-Wildschwein-Hybrid",
			description: description1,
			image: document.getElementById("image1") 
		},
		werk2: {
			title: "Die Sandfrau",
			description: description2,
			image: document.getElementById("image2") 
		},
		werk3: {
			title: "Puffel",
			description: description3,
			image: document.getElementById("image3") 
		},
		werk4: {
			title: "Mr.π",
			description: description4,
			image: document.getElementById("image4") 
		},
		werk5: {
			title: "Optimum Prime",
			description: description5,
			image: document.getElementById("image5")
		},
					// !!!!!!!!!!!!Hier witere Werke Hinzufügen!!!!!!!!!!!!!!!!!!!!
	};

	const modal = document.getElementById("werk-info-modal");
    const werkInfo = werkDetails[werkId];

    // Dynamisch generierter Inhalt für das Modal
    document.getElementById("werk-details").innerHTML = `
        <h3>${werkInfo.title}</h3>
        <img src="${werkInfo.image.src}" alt="${werkInfo.title}" class="modal-image" />
        <p>${werkInfo.description}</p>
    `;

    modal.style.display = "flex"; 
    document.body.style.overflow = 'hidden';
}

function schliesseWerkInfo() {
	const modal = document.getElementById("werk-info-modal");
	modal.style.display = "none";    
	document.body.style.overflow = 'auto'; 
}


window.onclick = function(event) {
	const modal = document.getElementById("werk-info-modal");
	if (event.target === modal) {
		schliesseWerkInfo();
	}
}
// !!!!!!!!!!!!Hier weitere Werke Elemente hinzufürgen
document.getElementById("werk1").addEventListener("click", function() {
    zentriereKreis(1);
});

document.getElementById("werk2").addEventListener("click", function() {
    zentriereKreis(2);
});

document.getElementById("werk3").addEventListener("click", function() {
    zentriereKreis(3);
});

document.getElementById("werk4").addEventListener("click", function() {
    zentriereKreis(4);
});

document.getElementById("werk5").addEventListener("click", function() {
    zentriereKreis(5);
});

document.getElementById("werk6").addEventListener("click", function() {
    zentriereKreis(6);
});