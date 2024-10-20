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
	const werkDetails = {
		werk1: {
			title: "Hund-Wildschwein-Hybrid",
			description: "Dieses Werk, das erste der &quot;Schaufel &quot;-Serie, thematisiert die Verschmelzung von Wesen. Die Erschaffung eines &quot;Hund-Wildschwein-Hybriden&quot; steht sinnbildlich für die kreativen Möglichkeiten des Menschen, wirft jedoch zugleich kritische ethische Fragen auf. Das Werk lädt zur Reflexion über die Verantwortung ein, die mit solch tiefgreifenden Eingriffen in die Natur einhergehen.",
			image: document.getElementById("image1") 
		},
		werk2: {
			title: "Die Sandfrau",
			description: "Inspiriert von E.T.A. Hoffmanns düsterer Erzählung &quot;Der Sandmann &quot; stellt dieses Werk nicht nur eine Hommage an die geheimnisvolle und mysteriöse Welt der Novelle dar, sondern ist zugleich eine ganz persönliche Interpretation. &quot;Die Sandfrau&quot; verarbeitet meine eigenen Erfahrungen, die ich im Leben sammeln musste, und verbindet sie mit den Themen der Erzählung. Die Grenzen zwischen Realität und Illusion, die Hoffmann in seiner Geschichte zeichnet, spiegeln sich in meinen eigenen Erlebnissen wider, in denen die Dunkelheit und Unsicherheit des Lebens oft die klare Sicht auf das Wesentliche trübte.",
			image: document.getElementById("image2") 
		},
		werk3: {
			title: "Puffel",
			description: "Als zweites Werk der &quot;Schaufel&quot;-Serie entstand &quot;Puffel&quot; in einem Moment tiefer Trauer und Reflexion, nur einen Tag nach dem Verlust eines geliebten Familienmitglieds – des treuen Hundes der befleckten Familie. Dieses Werk fängt die Gefühle von Verlust, Liebe und Erinnerung ein, die in solchen Momenten oft überwältigend sind. Es ist ein Denkmal der Vergänglichkeit des Lebens, aber auch der ewigen Verbindung, die über den Tod hinaus bestehen bleibt. &quot;Puffel&quot; ist eine physische Darstellung der Beziehung zwischen Mensch und Tier, die eine tiefe Rille hinterlässt.",
			image: document.getElementById("image3") 
		},
		werk4: {
			title: "Mr.π",
			description: "&quot;Mr.π&quot; steht symbolisch für die Vorstellung von unendlicher Freundschaft. Entstanden kurz nach &quot;Puffel&quot; greift es das Konzept der Unendlichkeit auf, das durch das mathematische Symbol π verkörpert wird – eine Zahl, die niemals endet. Es ist ein Tribut an die ewige Verbindung auch über den Tod hinaus. In diesem Werk geht es um die Überwindung von Grenzen und die Kraft wahrer Freundschaft, die weder Raum noch Zeit beschränken können.",
			image: document.getElementById("image4") 
		},
		werk5: {
			title: "Optimum Prime",
			description: "&quot;Optimum Prime&quot; wurde für eine Ausstellung an meiner alten Schule geschaffen und lud die Betrachter ein, ihrer Kreativität freien Lauf zu lassen. Die Namensgebung erfolgte durch Mitschüler verschiedener Jahrgänge, die ihre eigenen Interpretationen und Visionen einbrachten. Das Werk selbst und der kreative Entstehungsprozess standen dabei im Mittelpunkt – ein Zusammenspiel aus Assoziationen, Gedanken und Inspirationen, das zu vielfältigen Bedeutungen und Perspektiven führte.",
			image: document.getElementById("image5")
		},
					// !!!!!!!!!!!!Hier witere Werke Hinzufügen!!!!!!!!!!!!!!!!!!!!
	};

	const modal = document.getElementById("werk-info-modal");
	const werkInfo = werkDetails[werkId];
	document.getElementById("werk-details").innerHTML = `
	<h3>${werkInfo.title}</h3>
	<img src="${werkInfo.image.src}" alt="${werkInfo.title}" style="max-width: 20%; height: auto; margin-bottom: 10px;" /> <!-- Bild hinzufügen -->
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



