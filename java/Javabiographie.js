const texts = {
  de: {
    Seite1: "Werke",
    Seite2: "Biografie",
    Seite3: "Audi A2",
    Seite4: "Kontakt",
    ueberschrift: "Wilkommen",
    ue1: "Über mich",
    text1: "Derzeit absolviere ich ein Duales Studium an der DHBW Ravensburg Campus Friedrichshafen.",
    ue2: "Meine Biografie",
    th1: "Jahr",
    th2: "Ereignis",
    td1: "Geboren in Schleswig-Holstein",
    td2: "Abschluss der Realschule",
    td3: "Abschluss des Abiturs",
    td4: "Beginn des Dualen Studiums an der DHBW Ravensburg",
    td5: "ARTE Kunstmesse 24.–26. Oktober Burg Stettenfels"
  },
  en: {
    Seite1: "Works",
    Seite2: "Biography",
    Seite3: "Audi A2",
    Seite4: "Contact",
    ueberschrift: "Welcome",
    ue1: "About me",
    text1: "Currently, I am completing a dual study program at DHBW Ravensburg Campus Friedrichshafen.",
    ue2: "My Biography",
    th1: "Year",
    th2: "Event",
    td1: "Born in Schleswig-Holstein",
    td2: "Graduated from secondary school",
    td3: "Graduated from high school",
    td4: "Started dual study program at DHBW Ravensburg",
    td5: "ARTE Art Fair, October 24–26, Burg Stettenfels"
  }
};

// Funktion zum Aktualisieren aller Texte
function updateLanguage(lang) {
  const current = texts[lang];
  for (let id in current) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = current[id];
  }
  localStorage.setItem('language', lang);
}

// Sprachwechsel
function wechselbitte() {
  const currentLang = localStorage.getItem('language') === 'en' ? 'de' : 'en';
  updateLanguage(currentLang);
  document.querySelector(".übersetzung").classList.toggle("active");
}

// Sprache beim Laden setzen
window.onload = function () {
  const savedLanguage = localStorage.getItem('language') || 'de';
  updateLanguage(savedLanguage);
};
	
