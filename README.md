# wilko-nowak.de

Quellcode meiner privaten Webseite: Kunstwerke aus Stahl, mein Audi A2 und ein Kontaktformular.

**Live:** https://wilko-nowak.de

## Technik

- Reines HTML, CSS und JavaScript, ohne Framework und ohne Build-Schritt
- Gehostet über **GitHub Pages** mit eigener Domain (siehe `CNAME`)
- Schriften liegen lokal im Ordner `fonts/`, es werden keine externen Server wie Google Fonts angefragt
- Das Kontaktformular läuft über [Formspree](https://formspree.io)

## Aufbau

```
index.html            Startseite mit den Kunstwerken
biographie.html       Biografie
audia2.html           Audi A2
kontaktformular.html  Kontaktformular
datenschutz.html      Datenschutzerklärung
css/                  Stylesheets, eines pro Seite, plus strucktur.css für alle Seiten
java/                 JavaScript, eines pro Seite
bilder-und-videos/    Bilder und Videos
fonts/                Lokal eingebundene Schriften
favicon/              Favicons
robots.txt            Regeln für Suchmaschinen und das Sperren von KI-Crawlern
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Wenn absolute Pfade wie `/favicon/...` funktionieren sollen, besser einen lokalen Server auf eigener Maschine starten, zum Beispiel:

```
python -m http.server
```

Danach http://localhost:8000 aufrufen.

## Rechtliches

© Wilko Nowak. Alle Rechte vorbehalten. Texte, Bilder und Videos dürfen ohne meine Erlaubnis nicht weiterverwendet werden.
